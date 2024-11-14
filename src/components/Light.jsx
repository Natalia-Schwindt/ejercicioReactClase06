const Light = ({color}) => {

  return (
    <div>
      <div  style={{
          backgroundColor: color,
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          margin: '10px auto',
          cursor: 'pointer',
        }}></div>

    </div>
  )
}

export default Light
