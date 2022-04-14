import { css } from 'styled-components';

export const eclipse = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0.5em;
`;

export const twoLineEclipse = css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const button = css`
  border: none;
  border-radius: 10px;
  font-weight: 400;
  margin: 0.5em;
`;

export const notiIcon = css`
  font-size: 20px;
  height: 50px;
`;
