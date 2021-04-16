import React from "react";
import styled from 'styled-components'

export function Footer(props) {
    return (
        <Styles>
            <div className="footer">
                <p className="footer__p">
                    {props.text}
                </p>
            </div>
        </Styles>
    )
}



const Styles = styled.div``