import PropTypes from 'prop-types'
import Image from 'next/image'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'

const ProjectCard = ({ project }) => (
  <div className='project'>
    {project.thumbnail && (
      <div className='project__thumbnail'>
        <Image
          src={`/${project.thumbnail}`}
          alt={project.name || 'Project thumbnail'}
          width={300}
          height={200}
          layout='responsive'
        />
      </div>
    )}

    <div className='project__info'>
      {project.name && <h3>{project.name}</h3>}

      {project.description && (
        <div className='project__description paragraph__list'>
          {project.description.map((item, index) => (
            <p key={`${project.id}-desc-${index}`}>{item}</p>
          ))}
        </div>
      )}

      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item, index) => (
            <li key={`${project.id}-stack-${index}`} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}

      <div className='project__links'>
        {project.sourceCode && (
          <a
            href={project.sourceCode}
            target='_blank'
            rel='noreferrer'
            aria-label='source code'
            className='link link--icon'
          >
            <GitHubIcon />
          </a>
        )}

        {project.livePreview && (
          <a
            href={project.livePreview}
            target='_blank'
            rel='noreferrer'
            aria-label='live preview'
            className='link link--icon'
          >
            <LaunchIcon />
          </a>
        )}
      </div>
    </div>
  </div>
)

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.string),
    stack: PropTypes.arrayOf(PropTypes.string),
    sourceCode: PropTypes.string,
    livePreview: PropTypes.string,
  }).isRequired,
}

export default ProjectCard
