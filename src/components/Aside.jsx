import { TbMessageCircle, TbMap2, TbDeviceMobile, TbBrandFacebook ,TbBrandLinkedin ,TbBrandX } from "react-icons/tb";

function Aside() {
const contactInfo = [
    {
      id: 0,
      icon: TbMessageCircle,
      title: "Chat to us",
      description: "Our freindly Team",
      action:"hi@untitledpg.com",
    },
    {
      id: 1,
      icon: TbMap2,
      title: "Visit us",
      description: "Come say hello at our office HQ",
      action:"100 Smith Street Collingwood VIC 3066 AU",
    },
    {
      id: 2,
      icon: TbDeviceMobile,
      title: "Call us",
      description: "Mon-Fri from 8am to 5pm.",
      action:"+1 (555) 000-0000",
    }
  ];

  return (
    <aside>
    <div>
      {contactInfo.map((info) => {
        return (
          <div key={info.id} >
            <h3 className="text-lg font-bold">{<info.icon size={25} />} {info.title}</h3>
            <p className="mb"></p>
      }
    </div>
    </aside>
  );
}

export default Aside;
