import styled from 'styled-components'
import {blue} from './variable'
import media from './media'
export const A = styled.a`
 color ${blue};
 position: relative;
 text-decoration: none;
 ${media.phone`
    color:#b2ebf2;
 `}

`