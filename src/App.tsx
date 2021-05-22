import React, {useEffect, useState} from "react";
import {
  InputGroup,
  FormControl,
  Button,
  FormLabel,
  Alert,
} from "react-bootstrap";
import { randomNumber } from "./hooks/useRandomNumber";
export const App = () => {
  const [number, setNumber] = useState(0);

  const [limit, setLimit] = useState({ min: 1, max: 5 });
  const [error, setError] = useState(false);
  const handleChange = (e: any) => {
    setLimit({
      ...limit,
      [e.target.name]: parseInt(e.target.value),
    });
  };


  const handleSubmit = () => {
    //Validation
    if (limit.min >= limit.max) return setError(true);
    if (limit.min <= 0 || limit.max <= 0) return setError(true);

    //Pass the validation
    setError(false);
    setNumber(randomNumber(limit.min, limit.max));
  };

    useEffect(()=>{
        handleSubmit();
    },[])

    return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundColor: "#F5DDDD",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "48vh",
          minHeight: "50vh",
          backgroundColor: "#3A4454",
          borderRadius: "15px",
          padding: "2rem",
            marginTop: '1rem'
        }}
      >
        <h1 style={{ textAlign: "center", fontSize: "2rem" }}>
          Random Number Generator
        </h1>
        <div
          style={{
            width: "80%",
            backgroundColor: "#53687E",
            margin: "0 auto",
            marginTop: "1rem",
          }}
        >
          <p
            style={{
              padding: "1rem",

            }}
          >
            Random number: <span style={{ color: "#F5DDDD", fontWeight: 'bold' }}> {number}</span>
          </p>
        </div>
        <div>
          <p className={"text-center"}>
            Ingresa 2 numeros entre los cuales quieres que sea generado tu
            numero aleatorio{" "}
          </p>
          <InputGroup className="mb-3 d-flex flex-column">
            <FormLabel className={"text-center"}>Min:</FormLabel>
            <FormControl
              className={"w-75 mb-2 mx-auto"}
              type={"number"}
              value={limit.min}
              name={"min"}
              onChange={handleChange}
              placeholder={"Min. Ej. 1"}
            />
            <FormLabel className={"text-center"}>Max:</FormLabel>
            <FormControl
              className={"w-75 mb-2 mx-auto"}
              placeholder={"Max. Ej. 5"}
              type={"number"}
              name={"max"}
              value={limit.max}
              onChange={handleChange}
            />
            <Button
              variant={"success"}
              size="lg"
              type={'submit'}
              className={"w-75 mx-auto mt-2"}
              onClick={handleSubmit}
            >
              Generar
            </Button>
          </InputGroup>
        </div>
      </div>
      {error && (
        <div
          className={
            "p-3 rounded d-flex align-items-center animate__animated animate__rubberBand mt-2"
          }
          style={{ backgroundColor: "white" }}
        >
          <Alert variant={"danger"} className={"m-0  "}>
            Ingresa un numero mínimo o máximo válido
          </Alert>
        </div>
      )}
    </div>
  );
};
