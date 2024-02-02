/* eslint-disable react/prop-types */
import { useState } from 'react'
import Button from '../Button/Button'
import { DateRange } from 'react-date-range'
import BookingModal from '../Modal/BookingModal'
import useAuth from '../../hooks/useAuth'

const RoomReservation = ({ room }) => {


  const [value, setValue] = useState(
    {
      startDate: null,
      endDate: null,
      key: 'selection',
    },
  );
  // const [dateRange, setDateRange] = useState({
  //   startDate: new Date(room?.from),
  //   endDate: new Date(room?.to),
  //   key: 'selection',
  // })

  const perDayPrice = room?.price;

  const handleSelect = (ranges) => {
    setValue(ranges.selection);
  };

  const Price = () => {
    const { startDate, endDate } = value[0];

    if (startDate && endDate) {
      const numberOfDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
      const totalPrice = numberOfDays * perDayPrice;
      return totalPrice;
    }
    return 0;
  };
  const total = Price();
 

  let [isOpen, setIsOpen] = useState(false);
  const {user} = useAuth();
  const closeModal = () => {
    setIsOpen(false)
  }
  // const from = dateRange.startDate;
  // const to = dateRange.endDate;
  


  // Handle date change from react-date-range calender
  // const handleDates = ranges => {
  //   console.log(ranges)
  //   setValue(ranges.selection)
  // }
  // const handleDateChange = ranges => {
  //   console.log(ranges)
  //   setValue({
  //     startDate: new Date(room?.from),
  //     endDate: new Date(room?.to),
  //     key: 'selection',
  //   })
  // }
  const [bookingInfo, setBookingInfo] = useState({
    guest: {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
    },
    host: room?.host?.email,
    location: room?.location,
    total,
    to: value.endDate,
    from: value.startDate,
    title: room?.title,
    roomId: room?._id,
    image: room?.image,
  })
console.log(setBookingInfo)

  // console.log(dateRange)

  return (
    <div className='rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white'>
      <div className='flex items-center gap-1 p-4'>
        <div className='text-2xl font-semibold'>$ {room?.price}</div>
        <div className='font-light text-neutral-600'>night</div>
      </div>
      <hr />
      <div className='flex justify-center'>
        {/* <Calender value={value}  /> */}
       

      


        <div className='space-y-1'>
              <label htmlFor='location' className='block text-gray-600'>
                Select Availability Range
              </label>
              <DateRange
                rangeColors={['#F43F5E']}
                ranges={value}
                onChange={handleSelect}
                minDate={new Date()}
              />
            </div> 
      </div>

      <div>
      {/* <DateRangePicker
        ranges={dateRange}
        onChange={handleSelect}
      /> */}

    </div>
      <hr />
      <div className='p-4'>
        <Button
        disabled={room.host.email === user.email }
        onClick={() => setIsOpen(true)}
         label={'Reserve'} />
      </div>
      <hr />
      <div className='p-4 flex items-center justify-between font-semibold text-lg'>
        <div>Total</div>
        <div>$ {total}</div>
      </div>
      <BookingModal 
      // totalPrice={totalPrice}
      Price={Price()}
      // to={to}
      // from={from}

        closeModal={closeModal}
        isOpen={isOpen}
        bookingInfo={bookingInfo}
      />
    </div>
  )
}

export default RoomReservation
