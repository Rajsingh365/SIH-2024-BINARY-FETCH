
const Message = ({message}) => {
  // console.log("message", message);
  const fromMe = message.senderId === "66d4a5bfa3b01ef0066cfe67";
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1725217900~exp=1725221500~hmac=678006571426f6cf7e3e10c0e379a30baa3dd9090c5221919212c1db328b3ba2&w=740" : "https://img.freepik.com/free-vector/graident-ai-robot-vectorart_78370-4114.jpg?t=st=1723395278~exp=1723398878~hmac=de0e0c9226b09258da0b278081196e80eb44ad9dd00f3c919b43f37665e8fc58&w=740";

  const bubbleBgColor = fromMe ? "bg-blue-500" : "bg-purple-500";

  const shakeClass = message.shouldShake ? "shake" : "";

    return (
      <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
          <div className='w-10 rounded-full'>
            <img alt='Tailwind CSS chat bubble component' src={profilePic} />
          </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
      </div>
    );
};
export default Message;