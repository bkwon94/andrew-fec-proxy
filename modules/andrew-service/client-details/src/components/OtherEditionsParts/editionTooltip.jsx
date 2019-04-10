import React from 'react';
import styled from 'styled-components';
import { GreenButton } from '../header.jsx';
import Stars from './stars.jsx';
import styles from '../css/EditionTooltip.less';

const Wrapper = styled.div`
  padding: 0px;
  margin: 0px 0px 5px;
  min-width: 320px;
  max-width: 330px;
  height: auto;
  clear: both;
  z-index: 10;
  border: 4px solid transparent;

  position: absolute;
  left: -153px;
  bottom: 55px;
  overflow: visible;

  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
  font-size: 12px;
  color: #333333;
`;

const ToolTipArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 7px solid rgb(215, 210, 196);

  left: 50%;
  float: left;
  position: relative;
`;

const BorderFrame = styled.div`
  border: 6px solid rgb(215, 210, 196);
  border-radius: 5px;
  height: 100%;
  width: 100%;
  float: left;
  margin: 0;
  padding: 0;
  position: relative;
`;

const BorderCenter = styled.div`
  padding: 6px 6px;
  background: white;
`;

const Book = styled.div`
  width: 100%;
`;

const StatusWrapper = styled.div`
  display: flex;
  border-width: 10px;
  border-radius: 3px;
  margin-top: 8px;
  margin-bottom: 8px;
  margin-right: 8px;
  padding: 5px 10px;
  width: 110px;
  background-color: #409D69;
  border-color: #dddddd;

  text-align: left;
  font-size: 13px;
  font-weight: bold;
  font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: white;

`;

const StatusButton = styled.span`
  border-left: 1px solid #38883d;
`;

const EditionStatusArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid white;
  left: 11px;
  top: 7px;
  position: relative;
`;

const EditionRating = styled.div`
  padding-left: 35px;
  padding-top-bottom: 5px;
`;

const EditionTooltip = (props) => {
  const {
    isbn10, isbn13, originalPubDate, publisher, title, type,
  } = props;

  return (
    <div className={styles.editionTooltipWrapper}>
      <div className={styles.editionTooltipBorderFrame}>
        <div className={styles.editionTooltipBorderCenter}>
          <div className={styles.editionBook}>
            <div>{`${title} (${type})`}</div>
            <div>{`isbn: ${isbn10}`}</div>
            <div>{`isbn13: ${isbn13}`}</div>
            <div>{`format: ${type}`}</div>
            <div>{`Published ${originalPubDate} by ${publisher}`}</div>
            <GreenButton>Enlarge cover</GreenButton>
            <div className={styles.editionStatusWrapper}>
              <span title="status" style={{ paddingRight: '10px' }}>Want to Read</span>
              <span className={styles.editionStatusButton}><div className={styles.editionStatusArrow} /></span>
            </div>
            <div className={styles.editionRating}>
              <span title="editionRating" style={{ paddingRight: '15px' }}>Rate this Book</span>
              <Stars />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.editionTooltipArrow} />
    </div>
  );
};

export default EditionTooltip;
export {
  Wrapper,
  BorderFrame,
  BorderCenter,
  Book,
  EditionStatusArrow,
  Stars,
  StatusButton,
  ToolTipArrow,
};
