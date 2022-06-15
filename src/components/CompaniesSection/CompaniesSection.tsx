import styled from 'styled-components';
import Colors from 'styles/Colors';
import transitions from 'styles/transitions';
import { StyledTitle } from 'components/styles';
import { COMPANIES } from 'constants/companies';

export default function CompaniesSection(): JSX.Element {
  const copayCompanies = [...COMPANIES, ...COMPANIES, ...COMPANIES, ...COMPANIES, ...COMPANIES];

  return (
    <StyledCompaniesSection id="companies">
      <StyledTitle>COMPANIES</StyledTitle>
      <StyleFlowWrapper>
        <StyleFlowSlide>
          {copayCompanies?.map((company, key) => (
            <StyledCompany
              key={key + company.name}
              alt={company.name}
              src={company.src}
              width={company.width}
              height={company.height}
            />
          ))}
        </StyleFlowSlide>
      </StyleFlowWrapper>
    </StyledCompaniesSection>
  );
}

const StyledCompaniesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const StyleFlowWrapper = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
`;

const StyleFlowSlide = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  width: 100%;
  animation: ${transitions.backwardFlowFirst} 200s linear infinite;
`;

const StyledCompany = styled.img<{ width: string; height: string }>`
  position: relative;
  width: ${({ width }) => width};
  min-width: ${({ width }) => width};
  height: ${({ height }) => height};
  min-height: ${({ height }) => height};
  background-color: ${Colors.white};
`;
