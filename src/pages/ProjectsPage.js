import { Container, Button, Table } from 'react-bootstrap';
import config from '../config.json';

const ProjectsPage = () => {
    return (
        <Container className="mt-3">
            <h1>Projects</h1>
            <hr/>
            <p>Below you can view a list of projects that I've worked on. Some of these are open-source, others aren't. I enjoyed every moment of contributing to these projects, and they all collectively helped me learn programming and get to where I am today.</p>
            <Table responsive borderless>
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Description</th>
                        <th>Is actively maintained?</th>
                        <th>Programming Language Used</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        config.projects.map((data, key) => {
                            return (
                                <tr key={key}>
                                    <td>{data.name}</td>
                                    <td>{data.description}</td>
                                    <td>{data.active ? '✅ Yes' : '❌ No'}</td>
                                    <td>{data.language}</td>
                                    <td><Button variant="primary" href={data.url}>View on GitHub</Button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default ProjectsPage;