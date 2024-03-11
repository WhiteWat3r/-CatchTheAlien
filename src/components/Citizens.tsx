import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Citizen } from './Citizen';
import { availableCitizens } from '../utils/constants';

export const Citizens = () => {
  const [newCitizenIndex, setNewCitizenIndex] = useState(0);
  const [citizens, setCitizens] = useState<{ citizen: string; direction: string; id: string }[]>(
    [],
  );

  const createRandomCitizen = () => {
    const newCitizen = {
      citizen: availableCitizens[newCitizenIndex],
      direction: Math.random() < 0.5 ? 'left' : 'right',
      id: uuidv4(),
    };

    setCitizens([...citizens, newCitizen]);
    setNewCitizenIndex(newCitizenIndex === availableCitizens.length - 1 ? 0 : newCitizenIndex + 1);

    setTimeout(() => {
      setCitizens((prevCitizens) => prevCitizens.filter((c) => c.id !== newCitizen.id));
    }, 10000);
  };

  useEffect(() => {
    createRandomCitizen();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      createRandomCitizen();
    }, 3333);

    return () => clearInterval(intervalId);
  }, [citizens]);

  return (
    <div className="h-[200px] relative">
      {citizens.map((citizen) => (
        <Citizen citizen={citizen.citizen} direction={citizen.direction} key={citizen.id} />
      ))}
    </div>
  );
};
