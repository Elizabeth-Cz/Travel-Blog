import styled from "styled-components";
import smallImage from "../placeholders/smallImage.png";
const StylePostCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1.5rem 1.5rem 0;
  gap: 10px;

  div {
    width: 100%;
    display: flex;
    gap: 0.5rem;
    font-size: 13px;
  }
  h2 {
    font-size: 20px;
    width: 100%;
  }
`;

const ReadMore = styled.button`
  outline: none;
  border: none;
  border-bottom: 2px solid black;
  background: none;
  font-weight: 600;
  padding: 2px;
  margin-right: auto;
`;

const PostCard = ({ image, author, date, title, description }) => {
  return (
    <StylePostCard>
      <img src={smallImage} alt="" />
      <div>
        <p>Author Name</p>
        <p>|</p>
        <p>Nov 15, 2022</p>
      </div>
      <h2>Post Title</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <ReadMore>Read More</ReadMore>
    </StylePostCard>
  );
};

export default PostCard;
