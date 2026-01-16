import React from "react";
import styled from "styled-components";

const ServiceCard = ({ icon, title, desc }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="first-content">
          <img src={icon} alt={title} className="icon" />
          <span className="title">{title}</span>
        </div>
        <div className="second-content">
          <p className="desc">{desc}</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 210px;
    height: 260px;
    background: #181818;
    border: 1px solid #2b2b2b;
    border-radius: 12px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    transition: all 0.35s ease;
    cursor: pointer;
  }

  .card:hover {
    transform: scale(1.06);
    background: #222;
    border-color: #444;
  }

  .first-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 1;
    transition: 0.35s;
  }

  .icon {
    width: 46px;
    height: 46px;
    object-fit: contain;
    margin-bottom: 0.5rem;
  }

  .title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #fafafa;
    text-align: center;
  }

  .second-content {
    opacity: 0;
    height: 0;
    font-size: 0;
    overflow: hidden;
    transform: translateY(10px);
    transition: 0.35s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .desc {
    font-size: 0.95rem;
    color: #ddd;
    text-align: center;
    line-height: 1.4rem;
  }

  .card:hover .first-content {
    opacity: 0;
    height: 0;
  }

  .card:hover .second-content {
    opacity: 1;
    height: 100%;
    font-size: 0.95rem;
    transform: translateY(0px);
  }
`;

export default ServiceCard;
