import React, { useState, useEffect, useContext } from "react"
import { string } from "prop-types"
import styled from "styled-components"
import { AcceptTerms } from "./accept-terms"
import { FormContext } from "../../service/form-context"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const Uncheked = styled.div`
  height: 28px;
  width: 28px;
  margin-right: 8px;
  border: 1px solid #dbe2ea;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
  border-radius: 4px;
  box-sizing: border-box;
`

const Cheked = styled(Uncheked)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #0880ae;
  color: #0880ae;
`

const Input = styled.input`
  display: none;
`

export const CheckBox = ({ name }) => {
  const [isAcceptTerms, setAcceptTerms] = useState(false)
  const [value, setValue] = useState(false)
  const { setValid } = useContext(FormContext)

  useEffect(() => {
    setValid()
    // eslint-disable-next-line
  }, [value])

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onClick = () => {
    setValue(!isAcceptTerms)
    setAcceptTerms(!isAcceptTerms)
  }

  return (
    <>
      <Wrapper onClick={onClick}>
        {isAcceptTerms ? (
          <Cheked>
            <i className="fas fa-check"></i>
          </Cheked>
        ) : (
          <Uncheked />
        )}
        <Input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
        />
        <AcceptTerms />
      </Wrapper>
    </>
  )
}

CheckBox.propTypes = {
  name: string,
}