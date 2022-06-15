import styled, { css } from 'styled-components';
import Colors from 'styles/Colors';

export type IndexProps = {
  props: string;
};

export default function Index({ props }: IndexProps): JSX.Element {
  return <StyledIndex>Index</StyledIndex>;
}

const StyledIndex = styled.div``;
