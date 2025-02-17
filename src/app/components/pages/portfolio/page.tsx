import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { projectInfo } from '@/assets/data/projects';
import { Project, ProjectInfo } from '@/app/types/types';
import { CardProject } from '../../shared/card-projects/card';
import { LogoIcon } from '../../shared/logo-resume/logo';

const PortfolioPage: React.FC = ({}) => {
  const typedPortfolioInfo: ProjectInfo = projectInfo[0];
  const defaultTabKey = Object.keys(typedPortfolioInfo)[0];

  return (
    <>
      <LogoIcon />
      <div className="container h-[80vh] p-8 z-10 absolute items-center justify-center bg-opacity-60 gap-4 overflow-hidden rounded-lg border bg-background px-20 md:shadow-xl">
        <Tabs defaultValue={defaultTabKey} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            {Object.keys(typedPortfolioInfo).map((key, value) => (
              <TabsTrigger key={value} value={key}>
                {key.charAt(0).toLocaleUpperCase() + key.slice(1).toLocaleLowerCase()}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.keys(typedPortfolioInfo).map((key, index) => (
            <TabsContent
              className="grid grid-cols-4 gap-2 overflow-hidden overflow-y-hidden hover:overflow-y-scroll h-full"
              key={index}
              value={key}
            >
              {typedPortfolioInfo[key].map((project: Project, idx: number) => (
                <CardProject key={idx} project={project} length={4} />
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  );
};

export default PortfolioPage;
