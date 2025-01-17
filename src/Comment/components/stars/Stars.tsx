import styled from 'styled-components';
import { useState } from 'react';

interface StarsProps {
  value?: number;
  onChange?: (value: number) => void;
}

const Stars: React.FC<StarsProps> = ({ value = 3, onChange }) => {
  const [selected, setSelected] = useState<number>(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setSelected(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <StyledWrapper>
      <div className="rating">
        <input
          value={5}
          name="rate"
          id="star5"
          type="radio"
          checked={selected === 5}
          onChange={handleChange}
        />
        <label title="5 stars" htmlFor="star5" />
        <input
          value={4}
          name="rate"
          id="star4"
          type="radio"
          checked={selected === 4}
          onChange={handleChange}
        />
        <label title="4 stars" htmlFor="star4" />
        <input
          value={3}
          name="rate"
          id="star3"
          type="radio"
          checked={selected === 3}
          onChange={handleChange}
        />
        <label title="3 stars" htmlFor="star3" />
        <input
          value={2}
          name="rate"
          id="star2"
          type="radio"
          checked={selected === 2}
          onChange={handleChange}
        />
        <label title="2 stars" htmlFor="star2" />
        <input
          value={1}
          name="rate"
          id="star1"
          type="radio"
          checked={selected === 1}
          onChange={handleChange}
        />
        <label title="1 star" htmlFor="star1" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .rating {
    width: 130px;
  }

  .rating:not(:checked) > input {
    position: absolute;
    appearance: none;
  }

  .rating:not(:checked) > label {
    float: right;
    cursor: pointer;
    font-size: 30px;
    color: #666;
  }

  .rating:not(:checked) > label:before {
    content: '★';
  }

  .rating > input:checked + label:hover,
  .rating > input:checked + label:hover ~ label,
  .rating > input:checked ~ label:hover,
  .rating > input:checked ~ label:hover ~ label,
  .rating > label:hover ~ input:checked ~ label {
    color: #130c25;
  }

  .rating:not(:checked) > label:hover,
  .rating:not(:checked) > label:hover ~ label {
    color: #130c25;
  }

  .rating > input:checked ~ label {
    color: rgb(34, 193, 195);
  }
`;

export default Stars;
