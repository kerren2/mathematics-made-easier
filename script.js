const curriculum = {
  JSS1: [
    { title: "Whole numbers & numeration", category: "Number", icon: "01", intro: "Read, write, compare and arrange whole numbers. Use place value to understand what each digit is worth, and round numbers when an estimate is more useful than an exact answer.", example: "In 48,306, the 8 is in the thousands place, so its value is 8,000. Rounded to the nearest hundred, 48,306 is 48,300.", questions: [["What is the value of 7 in 572,149?", "70,000 (the ten-thousands place)."], ["Round 36,782 to the nearest thousand.", "37,000. The hundreds digit is 7, so round up."]] },
    { title: "Number bases", category: "Number", icon: "02", intro: "A number base tells you how many digits are used before carrying to the next place. In base two the digits are 0 and 1; in base five the digits are 0 to 4.", example: "Convert 1011₂ to base ten: 1×8 + 0×4 + 1×2 + 1×1 = 11₁₀.", questions: [["Convert 1101₂ to base ten.", "13₁₀ (8 + 4 + 0 + 1)."], ["Convert 14₁₀ to base two.", "1110₂ (8 + 4 + 2)."]] },
    { title: "Fractions", category: "Number", icon: "03", intro: "A fraction represents part of a whole. To add or subtract fractions, use a common denominator; to multiply, multiply across; to divide, multiply by the reciprocal.", example: "1/3 + 1/4 = 4/12 + 3/12 = 7/12.", questions: [["Simplify 18/24.", "3/4. Divide numerator and denominator by 6."], ["Find 2/5 × 15/4.", "3/2 or 1½. Cancel common factors first."]] },
    { title: "Decimals", category: "Number", icon: "04", intro: "Decimal places show tenths, hundredths, thousandths and smaller parts. Line up decimal points when adding or subtracting, and keep track of place value when multiplying or dividing.", example: "2.35 + 0.8 = 2.35 + 0.80 = 3.15.", questions: [["Calculate 6.4 − 2.75.", "3.65."], ["Calculate 0.6 × 0.3.", "0.18. There are two decimal places altogether."]] },
    { title: "Percentages", category: "Number", icon: "05", intro: "Percent means 'out of 100'. Change a percentage to a fraction or decimal by dividing by 100. Find a percentage of an amount by multiplying by the percentage as a decimal.", example: "25% of 80 = 0.25 × 80 = 20.", questions: [["Find 15% of 200.", "30."], ["Express 3/5 as a percentage.", "60%. (3 ÷ 5) × 100 = 60."]] },
    { title: "Ratio & rate", category: "Number", icon: "06", intro: "A ratio compares quantities in the same units. Simplify by dividing every part by the same factor. A rate compares quantities with different units, such as kilometres per hour.", example: "Share 24 sweets in the ratio 1:3. There are 4 parts; each part is 24 ÷ 4 = 6. The shares are 6 and 18.", questions: [["Simplify the ratio 18:30.", "3:5. Divide both parts by 6."], ["A car travels 150 km in 3 hours. What is its average speed?", "50 km/h. Speed = distance ÷ time."]] },
    { title: "Factors, multiples & primes", category: "Number", icon: "07", intro: "Factors divide a number exactly; multiples are found by multiplying. A prime number has exactly two factors: 1 and itself. Use factor lists to find HCF and LCM.", example: "Factors of 12 are 1, 2, 3, 4, 6, 12. The first common multiple of 4 and 6 is 12, so their LCM is 12.", questions: [["Find the HCF of 18 and 30.", "6."], ["Find the LCM of 8 and 12.", "24."]] },
    { title: "Integers & directed numbers", category: "Number", icon: "08", intro: "Integers include positive numbers, negative numbers and zero. On a number line, numbers increase as you move right. When subtracting a negative number, move right.", example: "−3 + 7 = 4. Start at −3 and move 7 steps to the right.", questions: [["Calculate −5 + 2.", "−3."], ["Calculate 4 − (−6).", "10. Subtracting a negative is adding."]] },
    { title: "Estimation & approximation", category: "Number", icon: "09", intro: "Rounding makes a number easier to use. Check the digit immediately to the right of the place you are rounding to: 5 or more rounds up; less than 5 stays down. Estimate to check whether an answer is sensible.", example: "Estimate 49 × 21 by rounding to 50 × 20 = 1,000.", questions: [["Round 8.764 to 2 decimal places.", "8.76. The next digit is 4."], ["Estimate 198 ÷ 4.1 using 1 significant figure.", "About 50 (200 ÷ 4)."]] },
    { title: "Algebraic expressions", category: "Algebra", icon: "10", intro: "Letters stand for numbers. Like terms have the same letter part and can be collected. To evaluate an expression, substitute the given value for each letter.", example: "If a = 3, then 2a + 5 = 2(3) + 5 = 11.", questions: [["Simplify 4x + 3x − 2.", "7x − 2."], ["Find 3p − 4 when p = 5.", "11."]] },
    { title: "Simple equations", category: "Algebra", icon: "11", intro: "An equation says two expressions are equal. Keep it balanced by doing the same operation to both sides. Undo addition or subtraction before multiplication or division.", example: "Solve 3x + 2 = 14: subtract 2 to get 3x = 12; divide by 3, so x = 4.", questions: [["Solve y − 7 = 9.", "y = 16."], ["Solve 5m = 35.", "m = 7."]] },
    { title: "Sets & set notation", category: "Algebra", icon: "12", intro: "A set is a collection of distinct objects. The symbol ∈ means 'belongs to'; ∪ means union (in either set); ∩ means intersection (in both sets).", example: "If A = {1, 2, 3} and B = {3, 4}, then A ∩ B = {3} and A ∪ B = {1, 2, 3, 4}.", questions: [["If P = {a, b, c} and Q = {c, d}, find P ∩ Q.", "{c}."], ["Is 5 ∈ {2, 4, 6}?", "No. 5 is not an element of the set."]] },
    { title: "Lines & angles", category: "Geometry", icon: "13", intro: "An angle measures a turn in degrees. Acute angles are less than 90°, right angles are 90°, obtuse angles are between 90° and 180°, and angles on a straight line add to 180°.", example: "Angles on a straight line add to 180°. If one is 65°, the other is 180° − 65° = 115°.", questions: [["Two angles on a straight line: one is 128°. Find the other.", "52°."], ["Find the complement of 37°.", "53°. Complementary angles add to 90°."]] },
    { title: "Plane shapes & polygons", category: "Geometry", icon: "14", intro: "Polygons are closed shapes with straight sides. A triangle has 3 sides, a quadrilateral 4, a pentagon 5 and a hexagon 6. Classify shapes by their sides, angles and symmetry.", example: "A regular hexagon has 6 equal sides and 6 equal angles. The sum of its interior angles is (6 − 2) × 180° = 720°.", questions: [["How many sides does an octagon have?", "8."], ["What is the sum of the interior angles of a triangle?", "180°."]] },
    { title: "Perimeter & area", category: "Geometry", icon: "15", intro: "Perimeter is the distance around a 2D shape; area is the surface it covers. Write the correct units: units for perimeter and square units for area.", example: "A rectangle 8 cm long and 3 cm wide has perimeter 2(8 + 3) = 22 cm and area 8 × 3 = 24 cm².", questions: [["Find the perimeter of a square with side 6 cm.", "24 cm."], ["Find the area of a triangle with base 10 cm and height 4 cm.", "20 cm². Area = ½ × base × height."]] },
    { title: "Collecting & presenting data", category: "Statistics", icon: "16", intro: "Data can be organised in tables and displayed with bar charts or pictograms. Include a title, labelled axes and a suitable scale. Frequency tells how many times a value occurs.", example: "For scores 2, 3, 3, 4, 4, 4, the frequency of 4 is 3.", questions: [["Find the mode of 2, 5, 5, 7, 8.", "5. It occurs most often."], ["What should the vertical axis of a bar chart show?", "The frequency or number in each category."]] }
  ],
  JSS2: [
    { title: "Number bases & conversion", category: "Number", icon: "01", intro: "Work in bases other than ten by using place values that are powers of the base. Convert to base ten by expanding; convert from base ten by repeated division or grouping.", example: "231₄ = 2×16 + 3×4 + 1 = 45₁₀.", questions: [["Convert 10110₂ to base ten.", "22₁₀ (16 + 4 + 2)."], ["Convert 25₁₀ to base three.", "221₃ (18 + 6 + 1)."]] },
    { title: "Fractions & mixed numbers", category: "Number", icon: "02", intro: "Convert a mixed number to an improper fraction before multiplying or dividing. For addition and subtraction, first find a common denominator, then simplify the result.", example: "2¼ = 9/4. Then 2¼ × 2/3 = 9/4 × 2/3 = 3/2 = 1½.", questions: [["Calculate 2/3 + 5/6.", "1½. (4/6 + 5/6 = 9/6)."], ["Calculate 3¼ − 1½.", "1¾."]] },
    { title: "Decimals & recurring decimals", category: "Number", icon: "03", intro: "Convert a terminating decimal to a fraction using its place value, then simplify. A recurring decimal has a digit or group of digits that repeats forever.", example: "0.375 = 375/1000 = 3/8 after dividing top and bottom by 125.", questions: [["Write 0.45 as a fraction in simplest form.", "9/20."], ["Calculate 4.8 ÷ 0.6.", "8. Move both decimal points one place to get 48 ÷ 6."]] },
    { title: "Percentages, profit & loss", category: "Number", icon: "04", intro: "Percentage change compares the change with the original amount. Profit = selling price − cost price; loss = cost price − selling price. Percentage profit or loss is based on cost price.", example: "Bought for ₦800, sold for ₦1,000: profit = ₦200; percentage profit = 200/800 × 100 = 25%.", questions: [["An item costs ₦2,000 and sells for ₦2,500. Find the percentage profit.", "25%. Profit is ₦500; 500/2,000 × 100."], ["A ₦600 item is sold at a 10% loss. Find its selling price.", "₦540. The loss is ₦60."]] },
    { title: "Ratio, proportion & rates", category: "Number", icon: "05", intro: "Equivalent ratios have the same relationship. Use proportion to scale recipes, maps or quantities. A unit rate compares an amount with one unit, such as price per kilogram.", example: "If 3 notebooks cost ₦450, one costs ₦150, so 5 notebooks cost 5 × ₦150 = ₦750.", questions: [["Share ₦840 in the ratio 3:4.", "₦360 and ₦480. Seven parts; each part is ₦120."], ["A map scale is 1 cm : 5 km. What real distance is 7 cm?", "35 km."]] },
    { title: "Standard form & significant figures", category: "Number", icon: "06", intro: "Standard form is a × 10ⁿ, where 1 ≤ a < 10 and n is an integer. Significant figures start at the first non-zero digit; use the next digit to decide whether to round.", example: "72,500 = 7.25 × 10⁴. The decimal point moved 4 places left.", questions: [["Write 0.00063 in standard form.", "6.3 × 10⁻⁴."], ["Round 58,472 to 2 significant figures.", "58,000."]] },
    { title: "Indices & powers", category: "Number", icon: "07", intro: "An index tells how many times to multiply a base by itself. For the same base, multiply powers by adding indices and divide powers by subtracting indices.", example: "2³ × 2² = 2⁵ = 32.", questions: [["Evaluate 3⁴.", "81."], ["Simplify 5⁶ ÷ 5².", "5⁴ = 625."]] },
    { title: "Directed numbers", category: "Number", icon: "08", intro: "Use a number line and sign rules for positive and negative numbers. Same signs when multiplying or dividing give a positive result; different signs give a negative result.", example: "(−4) × 3 = −12, while (−4) × (−3) = 12.", questions: [["Calculate −9 + 14 − 6.", "−1."], ["Calculate (−7) × (−5).", "35."]] },
    { title: "Algebra: simplify & substitute", category: "Algebra", icon: "09", intro: "Collect like terms and use the order of operations when substituting values. A coefficient is the number multiplying a variable; for example, 5 is the coefficient of 5x.", example: "Simplify 3a + 2b − a + 5b = 2a + 7b.", questions: [["Simplify 8x − 3 + 2x + 9.", "10x + 6."], ["Evaluate 2x² − y when x = 3 and y = 4.", "14. (2 × 9) − 4."]] },
    { title: "Expansion & factorisation", category: "Algebra", icon: "10", intro: "Expand brackets by multiplying every term inside by the term outside. Factorise by taking out the highest common factor shared by all terms.", example: "3(x + 4) = 3x + 12. In reverse, 6x + 18 = 6(x + 3).", questions: [["Expand 4(2y − 3).", "8y − 12."], ["Factorise 10x + 15.", "5(2x + 3)."]] },
    { title: "Linear equations", category: "Algebra", icon: "11", intro: "Solve a linear equation by isolating the unknown while keeping both sides balanced. Check your answer by substituting it into the original equation.", example: "Solve 2x − 5 = 9: add 5 to get 2x = 14; divide by 2, so x = 7.", questions: [["Solve 4y + 3 = 19.", "y = 4."], ["Solve 3(x − 2) = 15.", "x = 7."]] },
    { title: "Inequalities", category: "Algebra", icon: "12", intro: "An inequality compares values using <, >, ≤ or ≥. Solve like an equation, but reverse the inequality sign when multiplying or dividing both sides by a negative number.", example: "Solve x + 3 < 8: subtract 3, so x < 5.", questions: [["Solve 2x ≥ 10.", "x ≥ 5."], ["Solve −3y < 12.", "y > −4. The sign reverses when dividing by −3."]] },
    { title: "Sets & Venn diagrams", category: "Algebra", icon: "13", intro: "A Venn diagram shows how sets relate. The overlap represents the intersection; everything in either set is the union. Place elements in the overlap first, then in the non-overlapping regions.", example: "In a class of 20, 12 like football, 9 like basketball and 5 like both. At least one = 12 + 9 − 5 = 16.", questions: [["If n(A) = 14, n(B) = 11 and n(A ∩ B) = 4, find n(A ∪ B).", "21. Use n(A ∪ B) = n(A) + n(B) − n(A ∩ B)."], ["In a Venn diagram, where do elements in both sets go?", "In the overlapping intersection region."]] },
    { title: "Angles, triangles & polygons", category: "Geometry", icon: "14", intro: "Angles on a straight line total 180° and around a point total 360°. Triangle angles total 180°. For an n-sided polygon, interior angle sum = (n − 2) × 180°.", example: "A quadrilateral has angle sum (4 − 2) × 180° = 360°. If three angles total 270°, the fourth is 90°.", questions: [["Find the third angle in a triangle with angles 48° and 67°.", "65°."], ["Find the interior angle sum of a pentagon.", "540°."]] },
    { title: "Bearings & construction", category: "Geometry", icon: "15", intro: "A bearing is measured clockwise from north and written as a three-digit angle. Use a ruler and protractor for accurate geometric constructions; mark compass arcs clearly.", example: "A direction 45° clockwise from north is bearing 045°. A direction due east is 090°.", questions: [["Write the bearing for due south.", "180°."], ["A bearing is 120°. How many degrees clockwise from north is this?", "120°."]] },
    { title: "Perimeter, area & circles", category: "Geometry", icon: "16", intro: "Use the correct formula and units. Circle circumference C = πd = 2πr; area A = πr². Use π ≈ 22/7 or 3.142 as instructed.", example: "For a circle of radius 7 cm, circumference = 2 × 22/7 × 7 = 44 cm; area = 22/7 × 7² = 154 cm².", questions: [["Find the circumference of a circle with diameter 14 cm (use π = 22/7).", "44 cm."], ["Find the area of a rectangle 9 m by 4 m.", "36 m²."]] },
    { title: "Volume & capacity", category: "Geometry", icon: "17", intro: "Volume measures the space inside a 3D object and is written in cubic units. A cuboid's volume is length × width × height. 1,000 cm³ = 1 litre.", example: "A cuboid 5 cm × 4 cm × 3 cm has volume 5 × 4 × 3 = 60 cm³.", questions: [["Find the volume of a cube with side 4 cm.", "64 cm³."], ["How many litres are 3,000 cm³?", "3 litres."]] },
    { title: "Mean, median, mode & range", category: "Statistics", icon: "18", intro: "Mean = total ÷ number of values. Median is the middle value after sorting. Mode is most frequent; range = maximum − minimum. Choose the measure that best describes the data.", example: "For 2, 3, 3, 8: mean = 4, median = 3, mode = 3 and range = 6.", questions: [["Find the mean of 4, 6, 8, 10.", "7."], ["Find the median of 1, 4, 7, 9, 12.", "7."]] },
    { title: "Probability", category: "Statistics", icon: "19", intro: "Probability measures how likely an event is, from 0 (impossible) to 1 (certain). For equally likely outcomes, probability = favourable outcomes ÷ total outcomes.", example: "A fair die has 3 even numbers (2, 4, 6) out of 6, so P(even) = 3/6 = 1/2.", questions: [["What is the probability of getting a 5 on a fair six-sided die?", "1/6."], ["A bag has 3 red and 2 blue balls. What is P(blue)?", "2/5."]] }
  ]
};

const grid = document.querySelector("#topic-grid");
const searchInput = document.querySelector("#topic-search");
const filterSelect = document.querySelector("#topic-filter");
const dialog = document.querySelector("#lesson-dialog");
const completedKey = "maths-made-easy-completed";
let activeClass = "JSS1";
let completedTopics = new Set(JSON.parse(localStorage.getItem(completedKey) || "[]"));
let selectedTopic = null;

function updateProgress() {
  const total = Object.values(curriculum).flat().length;
  document.querySelector("#progress-count").textContent = `${completedTopics.size} of ${total} topics`;
  document.querySelectorAll(".topic-card").forEach((card) => {
    const done = completedTopics.has(card.dataset.topicId);
    card.classList.toggle("is-complete", done);
    const status = card.querySelector(".card-status");
    status.textContent = done ? "✓" : "↗";
    status.setAttribute("aria-label", done ? "Completed" : "Open lesson");
  });
}

function renderTopics() {
  const query = searchInput.value.trim().toLowerCase();
  const category = filterSelect.value;
  const topics = curriculum[activeClass].filter((topic) =>
    (category === "all" || topic.category === category) &&
    `${topic.title} ${topic.intro} ${topic.category}`.toLowerCase().includes(query)
  );
  grid.replaceChildren();
  document.querySelector("#empty-state").hidden = topics.length > 0;
  document.querySelector("#topic-summary").textContent = `${activeClass} curriculum · ${topics.length} ${topics.length === 1 ? "topic" : "topics"}`;

  topics.forEach((topic) => {
    const id = `${activeClass}:${topic.title}`;
    const card = document.createElement("button");
    card.type = "button";
    card.className = "topic-card";
    card.dataset.topicId = id;
    card.setAttribute("aria-label", `Open ${topic.title} lesson`);
    card.innerHTML = `<span class="card-top"><span class="card-number">${topic.icon}</span><span class="card-status"></span></span><span class="card-category"></span><span class="card-title"></span><span class="card-bottom"><span>Lesson + practice</span><span aria-hidden="true">→</span></span>`;
    card.querySelector(".card-category").textContent = topic.category === "Geometry" ? "GEOMETRY & MEASURE" : topic.category.toUpperCase();
    card.querySelector(".card-title").textContent = topic.title;
    card.addEventListener("click", () => openLesson(topic, id));
    grid.append(card);
  });
  updateProgress();
}

function openLesson(topic, id) {
  selectedTopic = { topic, id };
  document.querySelector("#dialog-tag").textContent = `${activeClass} · ${topic.category}`;
  document.querySelector("#dialog-title").textContent = topic.title;
  document.querySelector("#dialog-intro").textContent = topic.intro;
  document.querySelector("#dialog-example").textContent = topic.example;
  const questionList = document.querySelector("#question-list");
  questionList.replaceChildren();
  topic.questions.forEach(([question, answer], index) => {
    const item = document.createElement("article");
    item.className = "question-item";
    const questionText = document.createElement("p");
    questionText.className = "question-text";
    questionText.innerHTML = `<span>0${index + 1}</span>`;
    questionText.append(document.createTextNode(question));
    const answerButton = document.createElement("button");
    answerButton.type = "button";
    answerButton.className = "answer-toggle";
    answerButton.setAttribute("aria-expanded", "false");
    answerButton.textContent = "Show answer +";
    const answerText = document.createElement("p");
    answerText.className = "answer-text";
    answerText.hidden = true;
    answerText.textContent = answer;
    answerButton.addEventListener("click", () => {
      const showing = !answerText.hidden;
      answerText.hidden = showing;
      answerButton.setAttribute("aria-expanded", String(!showing));
      answerButton.textContent = showing ? "Show answer +" : "Hide answer −";
    });
    item.append(questionText, answerButton, answerText);
    questionList.append(item);
  });
  const completeButton = document.querySelector("#complete-button");
  completeButton.classList.toggle("is-done", completedTopics.has(id));
  completeButton.innerHTML = completedTopics.has(id) ? "Topic completed <span aria-hidden=\"true\">✓</span>" : "Mark topic as complete <span aria-hidden=\"true\">✓</span>";
  dialog.showModal();
}

document.querySelectorAll(".class-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    activeClass = tab.dataset.class;
    document.querySelectorAll(".class-tab").forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-selected", String(selected));
    });
    document.querySelector("#topic-panel").setAttribute("aria-labelledby", tab.id);
    renderTopics();
  });
});

document.querySelectorAll(".class-tab").forEach((tab) => {
  document.querySelector(`#count-${tab.dataset.class.toLowerCase()}`).textContent = `${curriculum[tab.dataset.class].length} topics`;
});

searchInput.addEventListener("input", renderTopics);
filterSelect.addEventListener("change", renderTopics);
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
document.querySelector("#complete-button").addEventListener("click", () => {
  if (!selectedTopic) return;
  completedTopics.add(selectedTopic.id);
  localStorage.setItem(completedKey, JSON.stringify([...completedTopics]));
  updateProgress();
  const button = document.querySelector("#complete-button");
  button.classList.add("is-done");
  button.innerHTML = "Topic completed <span aria-hidden=\"true\">✓</span>";
});
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    searchInput.value = "";
    renderTopics();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName) && !dialog.open) {
    event.preventDefault();
    searchInput.focus();
  }
});

renderTopics();