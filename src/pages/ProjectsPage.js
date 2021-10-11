import { Container, Button, Table } from 'react-bootstrap';

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
                    <tr>
                        <td>kBot</td>
                        <td>A unique Discord bot that does things that no other bot can do.</td>
                        <td>✅ Yes</td>
                        <td>JavaScript (Node.js)</td>
                        <td><Button variant="info" href="https://github.com/sanelk2004/kBot">View on GitHub</Button></td>
                    </tr>
                    <tr>
                        <td>ASH-AIO 2</td>
                        <td>ASH-AIO 2 is an open-source modification client for the Nintendo Wii U game Splatoon.</td>
                        <td>❌ No</td>
                        <td>C# (.NET)</td>
                        <td><Button variant="info" href="https://github.com/ashteam/ash-aio-2">View on GitHub</Button></td>
                    </tr>
                    <tr>
                        <td>SpamHook-Alpha</td>
                        <td>SpamHook-Alpha is an open-source Discord webhook spamming utility made mostly just to mess with friends.</td>
                        <td>❌ No</td>
                        <td>Python</td>
                        <td><Button variant="info" href="https://github.com/sanelk2004/spamhook-alpha">View on GitHub</Button></td>
                    </tr>
                    <tr>
                        <td>oibot</td>
                        <td>OIBot is a utility that forwards messages posted on the NWWS-OI (NOAA Weather Wire Service Open Interface) XMPP chatroom to a Discord webhook.</td>
                        <td>✅ Yes</td>
                        <td>Python</td>
                        <td><Button variant="info" href="https://github.com/sanelk2004/oibot">View on GitHub</Button></td>
                    </tr>
                    <tr>
                        <td>sphk</td>
                        <td>sphk is the successor to SpamHook-Alpha, but rewritten as a console app and GUI desktop application.</td>
                        <td>✅ Yes</td>
                        <td>C# (.NET)</td>
                        <td><Button variant="info" href="https://github.com/sanelk2004/sphk">View on GitHub</Button></td>
                    </tr>
                    <tr>
                        <td>sanelkukic.us.eu.org</td>
                        <td>This website is actually open-source! It was made using React, react-bootstrap, and react-router-dom</td>
                        <td>✅ Yes</td>
                        <td>JavaScript (Node.js), TypeScript, CSS, HTML</td>
                        <td><Button variant="info" href="https://github.com/sanelk2004/sanelkukic.us.eu.org">View on GitHub</Button></td>
                    </tr>
                    <tr>
                        <td>tools.sanelkukic.us.eu.org</td>
                        <td>A simple website that showcases some possibly useful tools for anyone to use.</td>
                        <td>✅ Yes</td>
                        <td>JavaScript, CSS, HTML</td>
                        <td><Button variant="info" href="https://github.com/sanelk2004/tools.sanelkukic.us.eu.org">View on GitHub</Button></td>
                    </tr>
                    <tr>
                        <td>cats.sanelkukic.us.eu.org</td>
                        <td>A website that displays randomly-selected photos of my two pet cats, Kitty and Mini!</td>
                        <td>✅ Yes</td>
                        <td>JavaScript, CSS, HTML</td>
                        <td><Button variant="info" href="https://github.com/sanelk2004/cats.sanelkukic.us.eu.org">View on GitHub</Button></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default ProjectsPage;