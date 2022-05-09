const Skill = (props) => {
  console.log(props.skill);
  return (
    <>
      <div className={"skills"} >
          <p style={{marginTop:'10px'}}>
              {props.skill}
              </p>
              </div>
    </>
  );
};

export default Skill;
