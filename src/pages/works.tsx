import AppleLogin from 'react-apple-login'

function Works() {
  return (
    <div className="w-screen h-screen">
      <AppleLogin clientId="com.imirante.login" redirectURI="" />
    </div>
  )
}

export default Works
