const questionDisplay = document.querySelector("#questions");
const answerDisplay = document.querySelector("#answer");

const questions = [
  {
    id: 0,
    text: "Pick something to munch on:",
    answers: [
      {
        text: "Ham and Cheese",
        image:
          "https://digitalcontent.api.tesco.com/v2/media/ghs/cbf501c4-dabc-4220-a429-1bba3f71cd79/186090cb-0f5c-40c5-8ee7-6aa5d6faea7e.jpeg?h=540&w=540",
        alt: "Photo of the Empire State building during daytime",
        credit: "Oliver Niblett",
      },
      {
        text: "BLT",
        image:
          "https://digitalcontent.api.tesco.com/v2/media/ghs/fb8964c4-a231-4f30-9151-51c88dc70638/414c765f-7303-44b5-a027-1a38b385b856.jpeg?h=540&w=540",
        alt: "Time-lapse photography car lights on bridge",
        credit: "Carlos Alfonso",
      },
      {
        text: "Chicken Tomato & Basil Pasta",
        image:
          "https://digitalcontent.api.tesco.com/v2/media/ghs/beaee471-b00d-40f2-a2bd-6ab221ec20a8/834384b5-e693-4ad4-a68f-e0db56b8dd21.jpeg?h=540&w=540",
        alt: "High-rise buildings",
        credit: "Elena Kuchko",
      },
      {
        text: "Roasted Vegetable & Pesto Wrap",
        image:
          "https://digitalcontent.api.tesco.com/v2/media/ghs/8ec997d7-7351-44bf-9a84-5de91ddfe070/0adf4f31-cc03-426a-864c-0fb995b963cf.jpeg?h=540&w=540",
        alt: "Road with people and house",
        credit: "João Francisco",
      },
    ],
  },
  {
    id: 1,
    text: "Going to need to wash that down with:",
    answers: [
      {
        text: "Pizza",
        image:
          "https://digitalcontent.api.tesco.com/v2/media/ghs/7c022d37-5f31-4bb9-9049-11c4cb5fd48b/snapshotimagehandler_1513610985.jpeg?h=540&w=540",
        alt: "Pepperoni Pizza",
        credit: "Alan Hardman",
      },
      {
        text: "Sandwich",
        image:
          "https://secure.ce-tescoassets.com/assets/CZ/008/3068320055008/ShotType1_540x540.jpg",
        alt: "ham sandwich on white surface",
        credit: "Eaters Collective",
      },
      {
        text: "Pasta",
        image:
          "https://digitalcontent.api.tesco.com/v2/media/ghs/1a8063e9-3c48-4c4b-be4e-4221f6927cbf/60431717-07a0-4554-9c3f-0fba3b49274a.jpeg?h=225&w=225",
        alt: "Pasta in tomato sauce",
        credit: "Mgg Vitchakorn",
      },
      {
        text: "Hamburger",
        image:
          "https://digitalcontent.api.tesco.com/v2/media/ghs/b59d6d6f-9c0b-4bf1-b8fa-af64f892c8c9/69966a38-6926-4be4-a7a9-9a3edff043df.jpeg?h=225&w=225",
        alt: "hamburger",
        credit: "sk",
      },
    ],
  },
  {
    id: 2,
    text: "damn im on my last:",
    answers: [
      {
        text: "Traditional",
        image:
          "https://digitalcontent.api.tesco.com/v2/media/ghs/39974ade-ba10-4bc8-bc45-420cc584a11a/d1510273-62a0-4cdf-800d-2443549000c7_1011748849.jpeg?h=540&w=540",
        alt: "focus photography of building windows",
        credit: "Burgess Milner",
      },
      {
        text: "Modern",
        image:
          "https://digitalcontent.api.tesco.com/v2/media/ghs/a46d4c93-0e26-422b-9f0c-0e07402808f4/12b474a8-0a9e-495f-bac6-03186d3eed74.jpeg?h=540&w=540",
        alt: "low angle view of building",
        credit: "Brandon Giggs",
      },
      {
        text: "House",
        image:
          "https://digitalcontent.api.tesco.com/v2/media/ghs/d8255de6-fa0c-4056-8ec2-85e40bf1b1d2/e9b7b641-737f-42c2-8329-888805d2c32b_611164878.jpeg?h=540&w=540",
        alt: "trees beside white house",
        credit: "Phil Hearing",
      },
      {
        text: "Popcorn",
        image:
          "https://digitalcontent.api.tesco.com/v2/media/ghs/25996ce1-c28d-493d-b671-0ebfabaf9c89/a7d6673d-a145-448c-98a5-758e125b0a2f_2132253811.jpeg?h=225&w=225",
        alt: "brown wooden cabin infront of forest",
        credit: "eulauretta",
      },
    ],
  },
];

const answers = [
  {
    combination: ["New York", "Pizza", "Traditional"],
    text: "oh no your broke...",
    image:
      "https://images.unsplash.com/photo-1624811532681-e58a7e25f273?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    alt: "Blue cheese",
  },
  {
    combination: ["Austin", "Pasta", "Modern"],
    text: "Cheddar",
    image:
      "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    alt: "Cheddar cheese",
  },
  {
    combination: ["Portland", "Sandwich", "Popcorn"],
    text: "Feta",
    image:
      "https://assets.entrepreneur.com/content/3x2/2000/eating-lunch-at-desk-work.jpg",
    alt: "Feta cheese",
  },
  {
    combination: ["New Orleans", "Hamburger", "House"],
    text: "Halloumi",
    image:
      "https://images.unsplash.com/photo-1505281036624-fac2862357b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    alt: "Halloumi",
  },
];
// need to have a default answer to compensate for lack of combination data

const unansweredQuestions = [];
const chosenAnswers = [];

const populateQuestions = () => {
  questions.forEach((question) => {
    const titleBlock = document.createElement("div");
    titleBlock.id = question.id;
    titleBlock.classList.add("title-block");
    const titleHeading = document.createElement("h2");
    titleHeading.textContent = question.text;
    titleBlock.append(titleHeading);
    questionDisplay.append(titleBlock);

    const answersBlock = document.createElement("div");
    answersBlock.id = question.id + "-questions";
    answersBlock.classList.add("answer-options");

    unansweredQuestions.push(question.id);

    question.answers.forEach((answer) => {
      const answerBlock = document.createElement("div");
      answerBlock.classList.add("answer-block");
      answerBlock.addEventListener("click", () =>
        handleClick(question.id, answer.text)
      );
      const answerImage = document.createElement("img");
      answerImage.setAttribute("src", answer.image);
      answerImage.setAttribute("alt", answer.alt);

      const answerTitle = document.createElement("h3");
      answerTitle.textContent = answer.text;

      const answerInfo = document.createElement("p");
      const imageLink = document.createElement("a");
      imageLink.setAttribute("href", answer.image);
      imageLink.textContent = answer.credit;
      const sourceLink = document.createElement("a");
      sourceLink.textContent = "Unsplash";
      sourceLink.setAttribute("src", "https://www.unsplash.com");
      answerInfo.append(imageLink, " to ", sourceLink);

      answerBlock.append(answerImage, answerTitle, answerInfo);

      answersBlock.append(answerBlock);
    });

    questionDisplay.append(answersBlock);
  });
};
populateQuestions();

const handleClick = (questionId, chosenAnswer) => {
  if (unansweredQuestions.includes(questionId))
    chosenAnswers.push(chosenAnswer);
  const itemToRemove = unansweredQuestions.indexOf(questionId);

  if (itemToRemove > -1) {
    unansweredQuestions.splice(itemToRemove, 1);
  }
  console.log(chosenAnswers);
  console.log(unansweredQuestions);

  disableQuestionBlock(questionId, chosenAnswer);
  const lowestQuestionId = Math.min(...unansweredQuestions);
  location.href = "#" + lowestQuestionId;

  if (!unansweredQuestions.length) {
    location.href = "#answer";
    showAnswer();
  }
};

const showAnswer = () => {
  let result;
  answers.forEach((answer) => {
    if (
      chosenAnswers.includes(answer.combination[0]) +
      chosenAnswers.includes(answer.combination[1]) +
      chosenAnswers.includes(answer.combination[2])
    ) {
      result = answer;
      return;
    } else if (!result) {
      //first answer object is default
      result = answers[0];
    }
  });

  const answerBlock = document.createElement("div");
  answerBlock.classList.add("result-block");
  const answerTitle = document.createElement("h3");
  answerTitle.textContent = result.text;
  const answerImage = document.createElement("img");
  answerImage.setAttribute("src", result.image);
  answerImage.setAttribute("alt", result.alt);

  answerBlock.append(answerTitle, answerImage);

  answerDisplay.append(answerBlock);

  const allAnswerBlocks = document.querySelectorAll(".answer-block");
  Array.from(allAnswerBlocks).forEach((answerBlock) =>
    answerBlock.replaceWith(answerBlock.cloneNode(true))
  );
};

const disableQuestionBlock = (questionId, chosenAnswer) => {
  const currentQuestionBlock = document.getElementById(
    questionId + "-questions"
  );

  Array.from(currentQuestionBlock.children).forEach((block) => {
    if (block.children.item(1).innerText !== chosenAnswer) {
      block.style.opacity = "50%";
    }
  });
};
