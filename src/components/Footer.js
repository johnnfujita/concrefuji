import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { TwitterWithCircle} from "@styled-icons/entypo-social/TwitterWithCircle"
import { InstagramAlt} from "@styled-icons/boxicons-logos/InstagramAlt"
import { MediumSquare } from "@styled-icons/boxicons-logos/MediumSquare"

const Footer = (props) => (
    <FooterContainer>
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <h5>Principal</h5>
                    <ul className="list-unstyled">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Equipe</a></li>
                        <li><a>Contato</a></li>
                    </ul>
                </div>

                <div className="col-md-3 col-sm-6">
                    <h5>Serviços</h5>
                    <ul className="list-unstyled">
                        <li><a>loren</a></li>
                        <li><a>loren</a></li>
                        <li><a>loren</a></li>
                        <li><a>loren</a></li>
                    </ul>
                </div>

                <div className="col-md-3 col-sm-6">
                    <h5>Lorem Ipsum</h5>
                    <ul className="list-unstyled">
                        <li><a>loren</a></li>
                        <li><a>loren</a></li>
                        <li><a>loren</a></li>
                        <li><a>loren</a></li>
                    </ul>
                </div>
            </div>

	    <SocialList>
            <a href="https://www.twitter.com/ViDAssociation"><Twitter size={30}/></a>
            <a href="https://www.instagram.com/virtualdemocracies"><Insta  size={36}/></a>
            <a href="https://www.medium.com/@virtualdemocracies"><Medium size={36} /></a>
            </SocialList>

            <div style={{borderTop: "1px solid rgba(0,0,0,0.07)"}} className="footer-bottom">
                <p className="text-xs-center">
                    &copy;{new Date().getFullYear()} Concrefuji - All Rights Reserved
                </p>
            </div>
        </div>
    </FooterContainer>
)



export default Footer


const Insta = styled(InstagramAlt)`
  color: rgba(49,56,60);
  margin-right: 6px;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  :hover {
    transform: scale(1.2);
    cursor: pointer;
    color: #af1010;
  }
`
const Medium = styled(MediumSquare)`
  color: rgba(49,56,60);
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  margin-right: 8px;
  :hover {
    transform: scale(1.2);
    cursor: pointer;
    color: #af1010;
  }
`

const Twitter = styled(TwitterWithCircle)`
  color: rgba(49,56,60);
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  margin-right: 8px;
  :hover {
    transform: scale(1.2);
    cursor: pointer;
    color: #af1010;
  }
`

const SocialList = styled.div`
    heigth: 80px;
    width: 100vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 8px;
`

const FooterContainer = styled.footer`
    padding-top: 24px;
    color: #aaa;

    a:hover {
        color: #af1010;
        cursor: pointer;
    }

    h5 {
        color: rgba(49,56,60);
    }
    
    .text-xs-center {
        font-size: 12px;
    }
`