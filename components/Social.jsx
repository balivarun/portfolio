import Link from "next/link";
import {FaGithub,FaLinkedinIn,FaTwitter} from "react-icons/fa"

const socials=[
  {icon:<FaGithub/>,path:"https://github.com/balivarun"},
  {icon:<FaLinkedinIn/>,path:"https://linkedin.com/in/varunbali345/"},
  {icon:<FaTwitter/>,path:"https://x.com/varunbali345"},

]

const Social = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
    {socials.map((item,index)=>{
      return (<Link key={index} href={item.path} className={iconStyles}>
        {item.icon}
      </Link>
      );
    })}
    </div>
  );
}

export default Social;
