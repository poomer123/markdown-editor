import React, { useState } from 'react';
import MarkdownIt from 'markdown-it';
import MarkdownEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import demoValue from './demoValue';

function App() {
	const [editorVal, setEditorVal] = useState('');

	const MarkdownParser = new MarkdownIt({
		html: true,
		linkify: true,
		typographer: true,
		quotes: '“”‘’',
	});

	const configEditor = {
		canView: {
			menu: true,
			md: true,
			html: true,
			fullScreen: true,
			hideMenu: true,
		},
	};

	const onEditorChange = (value) => {
		const { html, text } = value;
		setEditorVal(text);
		console.log('onEditorChange', html, text);
	};

	const onDemo = () => {
		setEditorVal(demoValue);
	};

	return (
		<div className="container pt-5">
			<h2>Sample Markdown Editor</h2>
			<div className="row">
				<div className="col-12">
					<button className="btn btn-primary my-3" onClick={onDemo}>
						Show Demo
					</button>
					<MarkdownEditor
						style={{ height: '500px' }}
						config={configEditor}
						renderHTML={(text) => MarkdownParser.render(text)}
						onChange={onEditorChange}
						value={editorVal}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
