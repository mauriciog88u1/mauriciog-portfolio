import { useState, useEffect } from "react";
import Chess from "chess.js";
import { Chessboard } from "react-chessboard";
import { Button, Modal } from "react-bootstrap";
import "../styles/Chess.css";

export default function PlayRandomMoveEngine() {
    const [game, setGame] = useState(new Chess());
    const [history, setHistory] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [legalMoves, setLegalMoves] = useState({});

    useEffect(() => {
        setLegalMoves(game.moves({ verbose: true }).reduce((moves, move) => {
            if (!moves[move.from]) moves[move.from] = [];
            moves[move.from].push(move.to);
            return moves;
        }, {}));

        if (game.in_checkmate()) {
            setModalContent("Checkmate! Game Over.");
            setShowModal(true);
        } else if (game.in_stalemate()) {
            setModalContent("Stalemate! Game Over.");
            setShowModal(true);
        }
    }, [game]);

    function resetGame() {
        setGame(new Chess());
        setHistory([]);
    }
    useEffect(() => {
        if (game.in_checkmate()) {
            setModalContent("Checkmate! Game Over.");
            setShowModal(true);
        } else if (game.in_stalemate()) {
            setModalContent("Stalemate! Game Over.");
            setShowModal(true);
        }
    }, [game]);

    function updateGame(move) {
        const updatedGame = new Chess(game.fen());
        if (updatedGame.move(move)) {
            setGame(updatedGame);
            setHistory(updatedGame.history({ verbose: true }));
        }
    }

    function onDrop(sourceSquare, targetSquare) {
        const move = {
            from: sourceSquare,
            to: targetSquare,
            promotion: "q"
        };
        updateGame(move);
    }
    function showFen() {
        setModalContent(game.fen());
        setShowModal(true);

    }

    function undoMove() {
        if (history.length > 0) {
            game.undo();
            setGame(new Chess(game.fen()));
            setHistory(game.history({ verbose: true }));
        }
    }

    return (

        <div className="chess-container">
            <card>
                This is a preview of the Chess project without user accounts actual version has invitations and stores
                matches
            </card>
            <div>
                <Chessboard
                    position={game.fen()}
                    onPieceDrop={onDrop}
                    boardWidth={400}
                    customBoardStyle={{
                        borderRadius: '5px',
                        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)'
                    }}
                    customSquareStyles={{
                        ...Object.keys(legalMoves).reduce((styles, square) => ({
                            ...styles,
                            [square]: {backgroundColor: 'rgba( 255, 255, 0, 0.5 )'}
                        }), {})

                    }}
                />
                <div className="chess-buttons">
                    <Button onClick={resetGame}>Reset Game</Button>
                    <Button onClick={undoMove}>Undo Move</Button>
                    <Button onClick={showFen}>Show FEN</Button>
                </div>
            </div>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalContent}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );

}






