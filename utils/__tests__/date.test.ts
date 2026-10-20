/**
 * Unit test util tanggal lokal JejakBaik.
 * Jalankan: npm test
 */
import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  formatTanggalIndonesia,
  getDayLabel,
  getGreeting,
  getLastNDays,
  getTodayLocal,
} from "../date";

describe("getTodayLocal", () => {
  it("format YYYY-MM-DD dari tanggal lokal", () => {
    assert.equal(getTodayLocal(new Date(2026, 9, 19, 15, 30)), "2026-10-19");
  });

  it("mem-padding bulan dan hari satu digit", () => {
    assert.equal(getTodayLocal(new Date(2026, 0, 5)), "2026-01-05");
    assert.equal(getTodayLocal(new Date(2026, 11, 31)), "2026-12-31");
  });

  it("default memakai waktu sekarang dengan format benar", () => {
    const now = new Date();
    const expected = `${now.getFullYear()}-${
      String(now.getMonth() + 1).padStart(2, "0")
    }-${String(now.getDate()).padStart(2, "0")}`;
    assert.equal(getTodayLocal(), expected);
  });
});

describe("getLastNDays", () => {
  it("7 hari lintas bulan (Oktober → November), urut menaik", () => {
    assert.deepEqual(getLastNDays(7, new Date(2026, 10, 3)), [
      "2026-10-28",
      "2026-10-29",
      "2026-10-30",
      "2026-10-31",
      "2026-11-01",
      "2026-11-02",
      "2026-11-03",
    ]);
  });

  it("lintas tahun", () => {
    assert.deepEqual(getLastNDays(4, new Date(2027, 0, 2)), [
      "2026-12-30",
      "2026-12-31",
      "2027-01-01",
      "2027-01-02",
    ]);
  });

  it("n = 1 mengembalikan hari itu saja, n = 0 mengembalikan []", () => {
    assert.deepEqual(getLastNDays(1, new Date(2026, 9, 19)), ["2026-10-19"]);
    assert.deepEqual(getLastNDays(0, new Date(2026, 9, 19)), []);
    assert.deepEqual(getLastNDays(-3), []);
  });

  it("default berakhir pada hari ini", () => {
    const days = getLastNDays(7);
    assert.equal(days.length, 7);
    assert.equal(days[6], getTodayLocal());
  });
});

describe("formatTanggalIndonesia", () => {
  it("dari string YYYY-MM-DD lokal", () => {
    assert.equal(formatTanggalIndonesia("2026-10-19"), "Senin, 19 Oktober 2026");
  });

  it("dari objek Date", () => {
    assert.equal(formatTanggalIndonesia(new Date(2026, 0, 1)), "Kamis, 1 Januari 2026");
  });

  it("melempar error untuk format tidak valid", () => {
    assert.throws(() => formatTanggalIndonesia("19-10-2026"), /tidak valid/);
    assert.throws(() => formatTanggalIndonesia("2026-13-01"), /tidak valid/);
  });
});

describe("getGreeting", () => {
  const jam = (hour: number) => new Date(2026, 9, 19, hour, 0, 0);

  it("batas waktu pagi/siang/sore/malam", () => {
    assert.equal(getGreeting(jam(4)), "pagi");
    assert.equal(getGreeting(jam(9)), "pagi");
    assert.equal(getGreeting(jam(10)), "pagi");
    assert.equal(getGreeting(jam(11)), "siang");
    assert.equal(getGreeting(jam(14)), "siang");
    assert.equal(getGreeting(jam(15)), "sore");
    assert.equal(getGreeting(jam(18)), "sore");
    assert.equal(getGreeting(jam(19)), "malam");
    assert.equal(getGreeting(jam(21)), "malam");
    assert.equal(getGreeting(jam(3)), "malam");
  });
});

describe("getDayLabel", () => {
  it("label hari pendek Sen/Sel/...", () => {
    assert.equal(getDayLabel("2026-10-19"), "Sen");
    assert.equal(getDayLabel("2026-10-20"), "Sel");
    assert.equal(getDayLabel("2026-10-25"), "Min");
    assert.equal(getDayLabel(new Date(2026, 10, 3)), "Sel");
  });
});
