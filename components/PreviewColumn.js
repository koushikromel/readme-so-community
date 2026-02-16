import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { TAB } from '../utils/constants'
import RawPreview from './RawPreview'

export const PreviewColumn = ({ selectedSectionSlugs, getTemplate, selectedTab, markdown }) => {
  const showPreview = selectedTab === TAB.PREVIEW
  return (
    <div
      className={`h-full preview-width md:w-auto border border-gray-500 rounded-md p-6 preview bg-white dark:bg-black full-screen 
      overflow-x-scroll md:overflow-x-auto ${
        showPreview ? 'overflow-y-scroll' : 'overflow-hidden'
      }`}
    >
      {showPreview ? (
        <Markdown
          remarkPlugins={[remarkGfm]}
          components={{
            a: (props) => <a target="_blank" {...props} />,
          }}
        >
          {markdown}
        </Markdown>
      ) : (
        <RawPreview text={markdown} />
      )}
    </div>
  )
}
