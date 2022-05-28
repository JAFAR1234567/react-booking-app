import "./Header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
// main css file
import "react-date-range/dist/styles.css";
// theme css file
import "react-date-range/dist/theme/default.css";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faReceipt,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

export const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOption, setOpenOption] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const optionHandler = (name, operation) => {
    console.log(typeof (name, operation));
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="header">
      <div className="header_container">
        <div className="header_list">
          <div className="header_item active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="header_item">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="header_item">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="header_item">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
          <div className="header_item">
            <FontAwesomeIcon icon={faReceipt} />
            <span>Airport reciptions</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <div className="header_content">
              <h1>A lifetime of discounts? It's Genius.</h1>
              <p>
                Get rewarded for your travels – unlock instant savings of 10% or
                more with a free Booking.com account
              </p>
              <button className="header_btn">Sign in / Register</button>
            </div>
            <div className="headerSEarch">
              <div className="headerSearchItem">
                <FontAwesomeIcon className="headerIcon" icon={faBed} />
                <input type="text" placeholder="where are you going?" />
              </div>
              <div className="headerSearchItem select-date">
                <FontAwesomeIcon className="headerIcon" icon={faCalendarDays} />
                <span
                  onClick={() => {
                    setOpenDate(!openDate);
                  }}
                >{`${format(date[0].startDate, "dd/MM/yy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    className="date"
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon className="headerIcon" icon={faPerson} />
                <span
                  onClick={() => setOpenOption(!openOption)}
                >{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                {openOption && (
                  <div className="options">
                    <div className="optionsItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCunterBtn"
                          onClick={() => optionHandler("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCunterBtn"
                          onClick={() => optionHandler("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionsItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCunterBtn"
                          onClick={() => optionHandler("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCunterBtn"
                          onClick={() => optionHandler("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionsItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCunterBtn"
                          onClick={() => optionHandler("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCunterBtn"
                          onClick={() => optionHandler("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="header_btn mb">Search</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
