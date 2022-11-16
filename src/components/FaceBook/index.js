import style from "./style.module.css";
import profilesJson from "../../data/berlin.json";
import { useState, useEffect } from "react";

export function FaceBook() {
     const [filterOption, setOptionFilter] = useState('All');

     let profilesArr = profilesJson.map(profile => {

          if (profile.isStudent === true) {
               profile.isStudent = 'Student';

          } else if (profile.isStudent === false) {
               profile.isStudent = 'Teacher';
          }
          return profile;
     });

     const [testeProfiles, setTesteProfiles] = useState(profilesArr);

     console.log(testeProfiles);

     const handleSelect = (e) => {
          setOptionFilter(e.target.value);
     };

     useEffect(() => {
          let filtered = [];
          if (filterOption === 'All') {
               filtered = profilesArr;
          } else (
               filtered = profilesArr.filter((profile) => {
                    return profile.country === filterOption;
               })
          );
          setTesteProfiles(filtered);
     }, [filterOption, profilesArr]);

     let countryFilter = profilesArr.map(current => current.country).filter((current, i, arr) => arr.indexOf(current) === i);

     return (
          <>
               <div className={style.filterContainer}>
                    <div className={style.filterItem}>
                         <label>Filter</label>
                         <select value={filterOption} onChange={handleSelect}>
                              <option>All</option>
                              {countryFilter.map((country) => {
                                   return <option key={country} value={country}>{country}</option>;
                              })}
                         </select>
                    </div>
               </div>

               {testeProfiles.map((person, i) => {
                    return (
                         <div key={`${person.lastName}${i}`} className={style.profile}>
                              <img src={person.img} alt={person.firstName} />
                              <div className={style.profileContent}>
                                   <p><strong>First name: </strong>{person.firstName}</p>
                                   <p><strong>Last name: </strong>{person.lastName}</p>
                                   <p><strong>Country: </strong>{person.country}</p>
                                   <p><strong>Type: </strong>{person.isStudent}</p>
                              </div>
                         </div>
                    );
               })
               }
          </>
     );
}
