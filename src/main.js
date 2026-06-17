import "./styles.css";
import { buildReading, getZodiacFromDate } from "./fortune.js";

const zodiacOptions = [
  "白羊座",
  "金牛座",
  "双子座",
  "巨蟹座",
  "狮子座",
  "处女座",
  "天秤座",
  "天蝎座",
  "射手座",
  "摩羯座",
  "水瓶座",
  "双鱼座",
];

const app = document.querySelector("#app");

app.innerHTML = `
  <main class="shell">
    <section class="reader" aria-labelledby="page-title">
      <div class="reader__copy">
        <p class="eyebrow">Tarot x Zodiac</p>
        <h1 id="page-title">星牌近日运势</h1>
        <p class="lede">抽取三张牌，结合星座、状态和关注主题生成未来三天的趋势。</p>
      </div>

      <form class="panel" id="reading-form">
        <div class="field-grid">
          <label>
            <span>昵称</span>
            <input name="name" maxlength="16" placeholder="旅人" autocomplete="name" />
          </label>
          <label>
            <span>出生日期</span>
            <input name="birthDate" type="date" value="1996-10-08" />
          </label>
          <label>
            <span>星座</span>
            <select name="zodiac">
              ${zodiacOptions.map((zodiac) => `<option>${zodiac}</option>`).join("")}
            </select>
          </label>
          <label>
            <span>当前状态</span>
            <select name="mood">
              <option value="steady">稳定</option>
              <option value="curious">好奇</option>
              <option value="tired">疲惫</option>
              <option value="hopeful">期待</option>
            </select>
          </label>
        </div>

        <fieldset class="segmented">
          <legend>关注主题</legend>
          <label><input type="radio" name="focus" value="general" checked />整体</label>
          <label><input type="radio" name="focus" value="love" />关系</label>
          <label><input type="radio" name="focus" value="career" />事业</label>
          <label><input type="radio" name="focus" value="money" />机会</label>
        </fieldset>

        <button class="draw-button" type="submit">
          <span aria-hidden="true">✦</span>
          抽牌
        </button>
      </form>
    </section>

    <section class="result" id="result" aria-live="polite"></section>
  </main>
`;

const form = document.querySelector("#reading-form");
const birthDate = form.elements.birthDate;
const zodiac = form.elements.zodiac;
const result = document.querySelector("#result");

zodiac.value = getZodiacFromDate(birthDate.value);
birthDate.addEventListener("change", () => {
  zodiac.value = getZodiacFromDate(birthDate.value);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const reading = buildReading({
    name: data.get("name"),
    birthDate: data.get("birthDate"),
    zodiac: data.get("zodiac"),
    mood: data.get("mood"),
    focus: data.get("focus"),
  });
  renderReading(reading);
});

renderReading(
  buildReading({
    name: "旅人",
    birthDate: birthDate.value,
    zodiac: zodiac.value,
    mood: "curious",
    focus: "general",
  }),
);

function renderReading(reading) {
  result.innerHTML = `
    <div class="result__header">
      <div>
        <p class="eyebrow">${reading.name} · ${reading.zodiac}</p>
        <h2>${reading.focusLabel}</h2>
      </div>
      <div class="score" aria-label="运势指数">${reading.score}</div>
    </div>

    <div class="cards">
      ${reading.cards
        .map(
          (card) => `
            <article class="tarot-card">
              <div class="tarot-card__face">
                <span>${card.position}</span>
                <strong>${card.name}</strong>
                <small>${card.orientation} · ${card.element}</small>
              </div>
              <p>${card.message}</p>
            </article>
          `,
        )
        .join("")}
    </div>

    <div class="oracle">
      <p>${reading.summary}</p>
      <p>${reading.advice}</p>
    </div>

    <dl class="lucky-strip">
      <div><dt>幸运色</dt><dd>${reading.lucky.color}</dd></div>
      <div><dt>时间窗</dt><dd>${reading.lucky.hour}</dd></div>
      <div><dt>数字</dt><dd>${reading.lucky.number}</dd></div>
    </dl>
  `;
}
