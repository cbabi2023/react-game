import React, { useState } from "react";
// Import MDB components
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
// Import images for rock, paper, and scissors
import rockImg from "./assets/images/rock.png";
import paperImg from "./assets/images/paper.gif";
import scissorsImg from "./assets/images/scissors.gif";

function Game() {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const choices = ["rock", "paper", "scissors"];
  const images = {
    rock: rockImg,
    paper: paperImg,
    scissors: scissorsImg,
  };

const handlePlayerChoice = (choice) => {
  setPlayerChoice(choice);

  // Computer makes several random choices and then picks the last one
  let randomChoice;
  for (let i = 0; i < 5; i++) {
    // Change 5 to however many times you want the computer to choose
    randomChoice = choices[Math.floor(Math.random() * choices.length)];
  }

  setComputerChoice(randomChoice);

  // Determine the winner
  determineWinner(choice, randomChoice);
};


  const determineWinner = (player, computer) => {
    if (player === computer) {
      setResult("It's a tie!");
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "scissors" && computer === "paper") ||
      (player === "paper" && computer === "rock")
    ) {
      setResult("You win!");
    } else {
      setResult("Computer wins!");
    }
  };

  return (
    <MDBContainer className="d-flex justify-content-center align-items-center vh-100">
      <MDBCard
        style={{
          padding: "30px",
          boxShadow: "4px 8px 16px rgba(0, 0, 0, 0.2)",
        }}
      >
        <MDBCardBody className="text-center">
          <h1 className="mb-4">Rock, Paper, Scissors </h1>
          <h4
            style={{ textAlign: "center", color: "violet", fontWeight: "800" }}
          >
            Click the below choices{" "}
            <i
              class="fa-regular fa-hand-point-down fa-bounce"
              style={{ color: "#B197FC" }}
            ></i>
          </h4>

          {/* Choices layout */}
          <MDBRow className="justify-content-center mb-4">
            <MDBCol className="d-flex justify-content-center container w-50">
              <button
                onClick={() => handlePlayerChoice("rock")}
                className="choice-button"
              >
                <img className="img-fluid" src={rockImg} alt="Rock" />
              </button>
              <button
                onClick={() => handlePlayerChoice("paper")}
                className="choice-button"
              >
                <img className="img-fluid" src={paperImg} alt="Paper" />
              </button>
              <button
                onClick={() => handlePlayerChoice("scissors")}
                className="choice-button"
              >
                <img className="img-fluid" src={scissorsImg} alt="Scissors" />
              </button>
            </MDBCol>
          </MDBRow>

          {/* Player and Computer choice comparison */}
          <div className="choice-container">
            <h2>Your choice:</h2>
            {playerChoice && (
              <img
                src={images[playerChoice]}
                alt={playerChoice}
                className="choice-image"
              />
            )}
          </div>

          <div className="choice-container">
            <h2>Computer's choice:</h2>
            {computerChoice && (
              <img
                src={images[computerChoice]}
                alt={computerChoice}
                className="choice-image"
              />
            )}
          </div>

          {/* Result */}
          <h2 className="result-text">{result}</h2>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Game;
