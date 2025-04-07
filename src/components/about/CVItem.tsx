
import  { HTMLAttributes, useRef } from 'react'
import styled from 'styled-components'
import { dt } from '../../../lib/mixins/layoutMixins'

interface Props extends  HTMLAttributes<HTMLDivElement> {

  id?:string;
  title?: string;
  subtitle?: string;
  tag?: string;
  details?: string;
  tags?: string[];
  className?:string;
}

const Container = styled.div`
  position: relative;
  width: 100%;
  padding:  20px;
  display: flex;

  align-items: center;
  border-bottom: var(--border-separator);
  gap: var(--gap-md);

  flex-direction: column;
  justify-content: start;

  ${dt`
    flex-direction:row;
    justify-content: space-between;

  `}

  &:hover {
    border-color: var(--swatches-primary);

    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 120%;
        /* border: 1px solid pink; */
    }
  }
`


const CVItem = ({
  title,
  subtitle,
  tag,
  tags = [],
  className,
  ...rest
}: Props) => {
  const ref = useRef<HTMLDivElement>(null)


  return (
    <Container ref={ref} className={className} {...rest}>
      <div className='w-full flex flex-col gap-sm'>
        <h5 className="text-md dt:text-lg">{title}</h5>
        <p className='text-text-secondary text-sm'>{subtitle}</p>
      </div>
    
      <div className='w-full flex gap-sm flex-wrap justify-start dt:justify-end'>
        {tag ? 
          <p className="text-sm text-text-tertiary">{tag}</p> :
          tags?.map((tag: string, i: number) => (
            <div key={`tag-${i}`} className='rounded-full w-max py-1 px-2 border-separator'>
              {tag}
            </div>
          ))
        }
      </div>

    </Container>
  )
}

export default CVItem
