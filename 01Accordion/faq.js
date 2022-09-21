const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

//targeting the accordian body using DOM
const accordianBody = document.querySelector(".accordian_body");

function createFaq() {
  for (i = 0; i < faqData.length; i++) {
    //Creating Faq Body and apending to accordian body
    let faq = document.createElement("div");
    accordianBody.append(faq);
    faq.classList.add("faq");

    //Creating Faq Header body and apending to faq
    let faqHead = document.createElement("div");
    faq.append(faqHead);
    faqHead.classList.add("faq_header");

    //Creating an header to append to faqHead
    let faqH3 = document.createElement("h3");
    faqHead.append(faqH3);
    faqH3.textContent = faqData[i].question;
    faqH3.classList.add("h3");

    //Creating a button to append to faqHead
    let faqBtn = document.createElement("button");
    faqHead.append(faqBtn);
    faqBtn.classList.add("show_btn");
    faqBtn.textContent = "+";

    //Creating a faq para to append to faq body
    let faqPara = document.createElement("p");
    faq.append(faqPara);
    faqPara.classList.add("p");
    faqPara.classList.add("hidden");
    faqPara.textContent = faqData[i].answer;

    //Checking the status of the button
    faqBtn.addEventListener("click", function btnStatusUpdate() {
      console.log("The Staus of the button is :-" + faqPara.classList);
    });

    //Adding a toggle function to hide and show answers
    faqBtn.addEventListener("click", function showFaq() {
      faqPara.classList.toggle("hidden");
    });
  }
}
createFaq();
const faqs = [];
