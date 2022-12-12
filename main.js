const inputPlayer1 = document.querySelector(".input-player1");
const inputScore1 = document.querySelector(".score1");
const inputPlayer2 = document.querySelector(".input-player2");
const inputScore2 = document.querySelector(".score2");
const saveBtn = document.querySelector("#save");
const addrDiv = document.querySelector(".address");

saveBtn.addEventListener("click", function () {
	// ----- Player 1 opslaan in localStorage
	const player1 = inputPlayer1.value;
	localStorage.setItem("player1", player1);

	const score1 = inputScore1.value;
	localStorage.setItem("score1", score1);

	// ----- Player 2 opslaan in localStorage
	const player2 = inputPlayer2.value;
	localStorage.setItem("player2", player2);

	const score2 = inputScore2.value;
	localStorage.setItem("score2", score2);
});

// Haal data op van localStorage
const p1 = localStorage.getItem("player1");
const s1 = localStorage.getItem("score1");
const p2 = localStorage.getItem("player2");
const s2 = localStorage.getItem("score2");
addrDiv.innerHTML = `
    <table>
        <tr>
            <td>${p1}</td>
            <td>${s1}</td>
        </tr>
        <tr>
            <td>${p2}</td>
            <td>${s2}</td>
        </tr>
    </table>
`;

addrDiv.style.border = "2px solid black";
addrDiv.style.background = "aqua";
