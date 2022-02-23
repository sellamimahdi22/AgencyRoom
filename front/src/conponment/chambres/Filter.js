import React from 'react'

const Filter = () => {
    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 30), 16)
      );
     
      const dispatch = useDispatch();
      const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
          createDate({
            date: startDate
          })
        );
        console.log(startDate)
      };
    
        
      return (
        <div>
          <form onSubmit={submitHandler}>
            <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              showTimeSelect
            /* showTimeSelectOnly */
              timeIntervals={15}
              excludeTimes={[
            setHours(setMinutes(new Date(), 0), 17),
            setHours(setMinutes(new Date(), 30), 18),
            setHours(setMinutes(new Date(), 30), 19),
            setHours(setMinutes(new Date(), 30), 17)
          ]}
              dateFormat="MMMM d, yyyy h:mm aa"
            />
    
            <Button
              variant="contained"
              size="small"
              color="primary"
              style={{
                            width: 80,
                            margin: 5
                          }}
              className={classes.button}
              type='submit'
            >
              Submit
            </Button>
    
          </form>               
        </div>
      );}

export default Filter