/**
 * Unit test fungsi murni progres JejakBaik.
 * Kasus wajib: daftar kosong, duplikat, 7 hari lintas bulan.
 * Jalankan: npm test
 */
import assert from "node:assert/strict";
import { describe, it } from "node:test";

import type { Habit } from "../../types/habit";
import { calcDailyPercent, calcLast7Days, calcWeeklyAverage } from "../progress";

function makeHabit(id: string, completions: string[]): Habit {
  return {
    id,
    name: `Kebiasaan ${id}`,
    category: "Kesehatan",
    icon: "leaf",
    createdAt: "2026-10-01",
    completions,
  };
}

describe("calcDailyPercent", () => {
  it("daftar kosong → 0 (total 0 tidak dibagi nol)", () => {
    assert.equal(calcDailyPercent([], "2026-10-19"), 0);
  });

  it("dihitung per kebiasaan", () => {
    const habits = [
      makeHabit("a", ["2026-10-19"]),
      makeHabit("b", ["2026-10-19"]),
      makeHabit("c", []),
      makeHabit("d", []),
    ];
    assert.equal(calcDailyPercent(habits, "2026-10-19"), 50);
    assert.equal(calcDailyPercent(habits, "2026-10-20"), 0);
  });

  it("duplikasi tanggal di completions tidak melipatgandakan hasil", () => {
    const habits = [
      makeHabit("a", ["2026-10-19", "2026-10-19", "2026-10-19"]),
      makeHabit("b", []),
    ];
    assert.equal(calcDailyPercent(habits, "2026-10-19"), 50);
  });
});

describe("calcLast7Days", () => {
  it("7 hari lintas bulan dengan label dan persentase benar", (t) => {
    const now = new Date(2026, 10, 3, 9, 0, 0).getTime(); // 3 November 2026
    t.mock.timers.enable({ apis: ["Date"], now });

    const habits = [
      makeHabit("a", ["2026-10-30", "2026-11-03"]),
      makeHabit("b", ["2026-10-28"]),
    ];

    assert.deepEqual(
      calcLast7Days(habits).map((d) => d.date),
      [
        "2026-10-28",
        "2026-10-29",
        "2026-10-30",
        "2026-10-31",
        "2026-11-01",
        "2026-11-02",
        "2026-11-03",
      ]
    );

    assert.deepEqual(
      calcLast7Days(habits).map((d) => d.percent),
      [50, 0, 50, 0, 0, 0, 50]
    );

    const labels = calcLast7Days(habits).map((d) => d.dayLabel);
    assert.equal(labels[0], "Rab"); // 28 Oktober 2026
    assert.equal(labels[3], "Sab"); // 31 Oktober 2026
    assert.equal(labels[6], "Sel"); // 3 November 2026
  });

  it("daftar kosong → semua persentase 0", (t) => {
    t.mock.timers.enable({ apis: ["Date"], now: new Date(2026, 9, 19).getTime() });

    const days = calcLast7Days([]);
    assert.equal(days.length, 7);
    assert.ok(days.every((d) => d.percent === 0));
  });
});

describe("calcWeeklyAverage", () => {
  it("daftar kosong → 0", (t) => {
    t.mock.timers.enable({ apis: ["Date"], now: new Date(2026, 9, 19).getTime() });
    assert.equal(calcWeeklyAverage([]), 0);
  });

  it("rata-rata 7 hari lintas bulan, dibulatkan", (t) => {
    const now = new Date(2026, 10, 3, 9, 0, 0).getTime(); // 3 November 2026
    t.mock.timers.enable({ apis: ["Date"], now });

    // 2 kebiasaan, satu selesai pada 3 hari dalam rentang 28 Okt - 3 Nov
    const habits = [
      makeHabit("a", ["2026-10-31", "2026-11-01", "2026-11-02"]),
      makeHabit("b", []),
    ];
    // persentase: [0, 0, 0, 50, 50, 50, 0] → total 150 / 7 = 21,43 → 21
    assert.equal(calcWeeklyAverage(habits), 21);
  });

  it("duplikasi tanggal tidak mengubah rata-rata", (t) => {
    const now = new Date(2026, 10, 3, 9, 0, 0).getTime();
    t.mock.timers.enable({ apis: ["Date"], now });

    const habits = [
      makeHabit("a", ["2026-11-03", "2026-11-03"]),
      makeHabit("b", []),
    ];
    // persentase hari terakhir tetap 50, bukan 100
    assert.equal(calcWeeklyAverage(habits), Math.round(50 / 7));
  });
});
