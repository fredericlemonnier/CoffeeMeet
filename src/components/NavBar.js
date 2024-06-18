import { Link } from "react-router-dom";
import styled from 'styled-components';

// Styled navbar container using flexbox
const NavbarContainer = styled.div`
    background: #f8f9fa;
    padding: 20px;
    display: flex; // Flex display for aligning items
    justify-content: space-around; // Evenly distribute space around items
    align-items: center; // Align items vertically in the center
    text-align: center;
    position: fixed; // Fix position relative to the viewport
    bottom: 0; // Set to bottom
    left: 0; // Span across the entire width of the viewport
    width: 100%; // Ensure it covers full width
    box-shadow: 0 -2px 4px rgba(0,0,0,0.1); // Optional: adds shadow for better separation
`;

// Styled link with hover effect
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #333;
    font-size: 20px;
    &:hover {
        color: #007bff;
    }
`;

// Optional styled button for one of the links
const NavButton = styled.button`
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 12px 24px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 4px;
    &:hover {
        background-color: #45a049;
    }
`;

function Navbar() {
    return (
        <NavbarContainer>
            <StyledLink to="/messages"><NavButton>M</NavButton></StyledLink>
            <StyledLink to="/match">C</StyledLink>
            <StyledLink to="/friends">F</StyledLink>
            <StyledLink to="/">P</StyledLink>
        </NavbarContainer>
    );
}

export default Navbar;
