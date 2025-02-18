import { Project } from '@/app/types/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

interface CardProps {
  project: Project;
  key: number;
  length: number;
}

export const CardProject: React.FC<CardProps> = ({ project, key }) => {
  const { name, description, title, image, url, repo } = project;

  return (
    <>
      <Card
        className={`w-full gap-4 ${image !== undefined || url != undefined || repo != undefined ? 'h-fit' : 'h-35vh'}`}
        key={key}
      >
        <CardHeader className="h-[80px]">
          <CardTitle>{title.toUpperCase()}</CardTitle>
          {description && <CardDescription className="text-xs">{description}</CardDescription>}
        </CardHeader>
        <CardContent className="space-y-2">
          {image && (
            <Image
              src={image}
              alt={name}
              width={400}
              height={300}
              className={`w-full h-full object-cover`}
              style={{ objectFit: 'cover' }}
            />
          )}
        </CardContent>
        <CardFooter>
          <ul className="w-full text-right">
            {name && (
              <li className="text-md overflow-hidden">
                <p>{name}</p>
              </li>
            )}
            {url && title != 'Test Marcap' && (
              <li className="text-xs overflow-hidden">
                <a href={url} target="_blank" className="hover:text-bold">
                  {url}
                </a>
              </li>
            )}
            {repo && title != 'Test Marcap' && (
              <li className="text-xs overflow-hidden">
                <a href={repo} target="_blank" className="hover:text-bold">
                  {repo}
                </a>
              </li>
            )}
          </ul>
        </CardFooter>
      </Card>
    </>
  );
};
