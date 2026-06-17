import { describe, expect, it } from "vitest";
import { buildReading, getZodiacFromDate } from "./fortune.js";

describe("getZodiacFromDate", () => {
  it("maps boundary dates to the expected western zodiac", () => {
    expect(getZodiacFromDate("2026-03-21")).toBe("白羊座");
    expect(getZodiacFromDate("2026-04-20")).toBe("金牛座");
    expect(getZodiacFromDate("2026-12-22")).toBe("摩羯座");
    expect(getZodiacFromDate("2026-01-19")).toBe("摩羯座");
  });
});

describe("buildReading", () => {
  it("returns a stable three-card reading for the same inputs", () => {
    const input = {
      name: "Luna",
      zodiac: "天秤座",
      birthDate: "1996-10-08",
      focus: "career",
      mood: "curious",
      seedDate: "2026-06-17",
    };

    const first = buildReading(input);
    const second = buildReading(input);

    expect(first).toEqual(second);
    expect(first.cards).toHaveLength(3);
    expect(new Set(first.cards.map((card) => card.name)).size).toBe(3);
    expect(first.summary).toContain("天秤座");
    expect(first.advice.length).toBeGreaterThan(10);
  });

  it("changes the reading when the focus changes", () => {
    const baseInput = {
      name: "Luna",
      zodiac: "天秤座",
      birthDate: "1996-10-08",
      mood: "curious",
      seedDate: "2026-06-17",
    };

    const career = buildReading({ ...baseInput, focus: "career" });
    const love = buildReading({ ...baseInput, focus: "love" });

    expect(career.cards.map((card) => card.name)).not.toEqual(
      love.cards.map((card) => card.name),
    );
    expect(career.focusLabel).toBe("事业与学业");
    expect(love.focusLabel).toBe("感情与关系");
  });
});
