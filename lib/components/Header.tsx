import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { dt } from "../mixins/layoutMixins";
import absPositionMixin from "../mixins/absPositionMixin";
import NavLink, { INavLink } from "./NavLink";
import { Rotate as Hamburger } from 'hamburger-react';
import gsap from 'gsap';
import {ScrollToPlugin, ScrollTrigger} from 'gsap/all';
import CTALink from "./CTALink"
import StarAnimation from "./StarAnimation"
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

interface IHeader {
  links: INavLink[];
  logo?: string;
}

const Container = styled.div<{  $isNavigationOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  max-height: 64px;
  height: 95vh;
  ${absPositionMixin({ position: 'top', outside: false, gap: '20px' })}

  position: fixed;
  align-items: start;
  width: 90vw;
  z-index: var(--z-header);
  border:  0.2px solid #ffffff1d;
  background-color: var(--background-primary);
  backdrop-filter: blur(var(--blur-sm, 4px));
  padding: 12px;
  border-radius: var(--br-md);

  max-height: ${({  $isNavigationOpen }) =>  $isNavigationOpen ? "90vh" : "64px"};
  transition: ${({  $isNavigationOpen }) =>  $isNavigationOpen 
    ? "max-height 0.8s cubic-bezier(0.45, 0, 0.2, 1) 0s, visibility 0s linear 0s;" 
    : "max-height 0.8s cubic-bezier(0.65, 0.05, 0.36, 1) 1s, visibility 0s linear 1.1s;"
  };


  ${dt`
      height: fit-content;

  `}
`;

const LogoLink = styled.div`
  display: block;
  height: 40px;

  img {
    height: 100%;
    width: auto;
    object-fit: contain;
  }
`;

const Navigation = styled.nav<{  $isNavigationOpen: boolean }>`
  width: 100%;
  height: 80vh;
  z-index: 100;

  position: absolute;
  top: 84px;
  left: 0;
  border-radius: var(--br-lg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--gap-lg);

  /* Mobile animation */
  visibility: ${({  $isNavigationOpen }) =>  $isNavigationOpen ? "visible" : "hidden"};
  max-height: ${({  $isNavigationOpen }) =>  $isNavigationOpen ? "80vh" : "0px"};
  transition: ${({  $isNavigationOpen }) =>  $isNavigationOpen 
    ? "max-height 1s cubic-bezier(0.45, 0, 0.2, 1) 0s, visibility 0s linear 0s;" 
    : "max-height 1.1s cubic-bezier(0.65, 0.05, 0.36, 1) 1s, visibility 0s linear 1.5s;"
  };
  overflow: hidden; 

  /* Desktop: No animation, always visible */
  ${dt`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    width: 100%;
    height: fit-content;
    position: relative;
    top: 0;
    left: 0;
    gap: 0;
    visibility: visible !important;
    max-height: none !important;
    overflow: visible;
    transition: none !important;
    border: none;
  `}




`;



const NavLinkWrapper = styled.div`
  /* Make sure links are visible on initial load */
  opacity: 1;
  transform: translateY(0);
`;

const StyledBurger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-height: 48px;
  

  ${dt`
    display: none;
  `}
`;

const StyledStarAnimation = styled(StarAnimation)`
  position: absolute;
  width: 100%;
  max-height: 40vh;
  z-index: -1;
  opacity: 0;

  ${absPositionMixin({ position: 'bottom', outside: false, gap: 0 })}

  ${dt`
    display:none;
  `}
`


const Header: React.FC<IHeader> = ({ 
  logo, 
  links, 

}) => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const initialLoadRef = useRef(true);

  const toggleNavigation = () => {

    setIsNavigationOpen((prev) => !prev);

  };

  const scrollToSection = (url: string) => {
    const targetId = url.replace("#", "");
    const targetElement = document.getElementById(targetId);
  
    if (!targetElement) return; // Ensure element exists
  
    const rect = targetElement.getBoundingClientRect();
    const targetPosition = rect.top + window.pageYOffset;
    const offsetPosition = targetPosition - 80; // Subtract 80px for the offset
  
    gsap.to(window, {
      scrollTo: offsetPosition,
      duration: 1.2,
      ease: 'power2.inOut'
    });
  };
  
  const handleClick = (e: React.MouseEvent<HTMLDivElement>, url: string) => {
    e.preventDefault()
    e.stopPropagation()
    scrollToSection(url)

    if (!isNavigationOpen) return;
    setIsNavigationOpen(false);
    enablePageScroll()

  };

  // Check if we're on mobile
  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.matchMedia("(max-width: 1023px)").matches;
      setIsMobile(mobile);
      
      // Reset all GSAP animations when switching to desktop
      if (!mobile) {
        gsap.set(".link", { clearProps: "all" });
      }
    };
    
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Set links to initial visible state
  useEffect(() => {
    // Make sure all links start visible
    gsap.set(".link", { opacity: 1, y: 0 });

    
    // After first render, we're no longer in initial load
    initialLoadRef.current = false;
  }, []);

  useEffect(() => {
    if (isNavigationOpen)  disablePageScroll() 
    else enablePageScroll()
  } , [isNavigationOpen])
  // Handle animations only on mobile and only after navigation state changes
  useEffect(() => {
    // Skip animations on initial render
    if (initialLoadRef.current) return;
    
    // Skip all animations if not on mobile
    if (!isMobile) return;
    
    if (isNavigationOpen) {

      gsap.fromTo(".link", 
        {
          y: 25, 
          opacity: 0,
        },
        {
          delay: 0.5,
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
        }
      );

      gsap.to("#header" , {
        backgroundColor: "var(--background-primary)",
        duration: 1,

      })

      gsap.to(".header-animation" , {
        opacity:0.5,
        duration:0.5,
        delay:1
      })
    } else {
      gsap.to(".header-animation" , {
        opacity:0,
        duration:0.5,
        delay:0
      })
      gsap.fromTo(".link", 
        {
          y: 0,
          opacity: 1,
        },
        {
          delay: 0,
          y: 40,
          opacity: 0,
          duration: 0.6,
          ease: "power3.in",
          stagger: {
            amount: 0.35,
            from: "end",
          },
        }
      );
      gsap.to("#header" , {
        duration: 1,
        delay:1.2

      })

    }
  }, [isNavigationOpen, isMobile]);
  
  return (
    <Container id='header' $isNavigationOpen={isNavigationOpen}>
      <LogoLink onClick={(e) =>handleClick(e, "#hero")}
      >
        <img src={logo} width={190} height={40} alt="logo" />
      </LogoLink>

      <Navigation 
        id="header-nav"
        $isNavigationOpen={isNavigationOpen}
      >
        {links?.map((item) =>  item.isCta ? 
         <CTALink
         key={`nav-link-${item.url}`}
         className="link"
         url={item.url}
         label={item.label}
         onClick={(e) =>handleClick(e,item.url)}
        />
        :(
          <NavLinkWrapper key={item.label}>
            <NavLink
              className="link"
              key={`nav-link-${item.url}`}
              url={item.url}
              label={item.label}
              onClick={(e) => handleClick(e, item.url)}            
            />
          </NavLinkWrapper>
          
        ))}

      <StyledStarAnimation className="header-animation"/>
      </Navigation>

      <StyledBurger>
        <Hamburger
          toggled={isNavigationOpen}
          toggle={toggleNavigation}
          distance="sm"
          color="currentColor"
          rounded
          label="Show menu"
          size={20}
          duration={0.8}
        />
      </StyledBurger>
    </Container>
  );
};

export default Header;