const eLog = document.querySelector(".entryLog");
const submit = document.querySelector(".record");

submit.addEventListener("click", function(event) {
  console.log(event);
  event.preventDefault();
  const entry = {
    date: document.querySelector("#journalDate").value,
    concept: document.querySelector("#coveredConcepts").value,
    content: document.querySelector("#journalEntry").value,
    mood: document.querySelector("#mood").value,
    additional: document.querySelector("#addComs").value
  };
  fetch("http://localhost:3000/journalEntries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(entry)
  })
    .then(res => res.json()) // Parse as JSON
    .then(getEntries);
});

function getEntries() {
  eLog.innerHTML = "";
  fetch("http://localhost:3000/journalEntries")
    .then(res => res.json())
    .then(entries => {
      entries.forEach(entry => {
        console.log(entry);
        eLog.innerHTML += `<div>
            <h2>Journal Entry (# ${entry.id}) Date: ${entry.date}</h2>
            <h2>Concepts Coverered: ${entry.concept}</h2>
            <h2>Current Mood: ${entry.mood}</h2></br>
            <h3>Entry Content: ${entry.content}</h3>
            <h4><strong>Additional Comments: ${entry.additional}</strong></h4>
            </br><hr></br>`;
      });
    });
}

getEntries();
