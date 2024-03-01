import {IMarginDividerProps} from '@models/margin-divider-models.ts';
import styled from 'styled-components';


export const MarginDivider = styled.div<IMarginDividerProps>`
margin-bottom: ${props => props.$marginBottom || 0 };
margin-top: ${props => props.$marginTop || 0 }`;
