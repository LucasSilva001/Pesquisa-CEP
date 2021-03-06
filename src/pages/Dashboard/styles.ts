import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  width: 100%;
  margin: auto;
`;

export const Title = styled.h2`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 590px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form`
  display: flex;

  margin-top: 40px;
  max-width: 700px;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 2px solid #fff;
    border-right: 0;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: #3a3a3a;

		&::placeholder {
			color: #a8a8b3;
		}
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;

		transition: background-color 0.2s;

		&:hover {
			background-color: ${shade(0.2, "#04d361")};
		}
  }
`;

export const Ceps = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #ffffff;
    border-radius: 5px;
    width: 100%;
    display: block;
    padding: 24px;
    text-decoration: none;

    display: flex;
    align-items: center;

    transition: transform 0.2s;

    &:hover {
      transform: translate(10px);
    }

    & + a{
      margin-top: 16px;
    }

    .uf {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: #04d361;
      padding: 20px;

    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
  }
`;
