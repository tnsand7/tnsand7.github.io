import styled from 'styled-components';
import MainBanner from 'components/MainBanner';
import CompaniesSection from 'components/CompaniesSection';
import SkillsSection from 'components/SkillsSection';
import HistorySection from 'components/HistorySection';
import ProjectsSection from 'components/ProjectsSection';
import AboutMeSection from 'components/AboutMeSection';
import AboutWorkExperience from 'components/AboutWorkExperience';
import TopButton from 'components/common/TopButton';
import dynamic from 'next/dynamic';

function HomePage(): JSX.Element {
  return (
    <StyleHomePage>
      <TopButton />
      <MainBanner />
      <AboutMeSection />
      <SkillsSection />
      <HistorySection />
      <AboutWorkExperience />
      <ProjectsSection />
      <CompaniesSection />
    </StyleHomePage>
  );
}

const StyleHomePage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  width: 100%;
  font-weight: 700;
`;

export default dynamic(() => Promise.resolve(HomePage), {
  ssr: false,
});
