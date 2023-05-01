import { Link, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { Wrapper, Title, DropDown, GoBack } from './FilterStarus.styled';

export const FilterStarus = ({ handleFilter }) => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  const handleSelectChange = (event) => {
    handleFilter(event.target.value);
  };
  return (
    <Wrapper>
      <div>
        <Title>Filter by users status:</Title>
        <DropDown onChange={handleSelectChange}>
          <option value="">All</option>
          <option value="false">Follow</option>
          <option value="true">Following</option>
        </DropDown>
      </div>
      <GoBack>
        <Link
          style={{
            display: 'flex',
            textDecoration: 'none',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '18px',
            lineHeight: '22px',
            textTransform: 'uppercase',
          }}
          to={backLinkHref.current}
        >
          Go BACK
        </Link>
      </GoBack>
    </Wrapper>
  );
};
