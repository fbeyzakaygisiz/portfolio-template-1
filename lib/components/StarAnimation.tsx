import Lottie from 'react-lottie';
import starLottie from "../assets/animations/star.json"

interface IStarAnimation {
    width?: number | string;
    height?:number  | string;
    className?:string
}

function StarAnimation({
  width='100%',
  height='auto',
  className=""
}: IStarAnimation) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: starLottie,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
  return (

    <div className={className} >
    <Lottie 
    options={defaultOptions}
    height={height}
    width={width}
  />
    </div>


  )
}

export default StarAnimation