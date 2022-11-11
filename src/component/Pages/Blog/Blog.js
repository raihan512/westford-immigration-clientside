import React from 'react';
import UseTitle from '../../../UseTitle/UseTitle';

const Blog = () => {
    UseTitle('Blog')
    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <h3 className='text-lg md:text-5xl font-bold text-blue-2 text-center uppercase mb-3'>Blog</h3>
            {/* Blog Item */}
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-sm">
                <div className="collapse-title text-md md:text-xl font-medium">
                    Difference between SQL and NoSQL?
                </div>
                <div className="collapse-content">
                    <p>SQL database are relational type database and NoSQL database are not relational</p>
                    <p>SQL databases use standard Structured Query Languages, as the name suggests.
                        SQL is an industry-standard and very powerful language to execute complex queries. But NoSQL database has dynamic schema for unstructured data. The data stored in a NoSQL database is not structured.
                        Data could be stored as document-oriented, column oriented, graph-based or organized as a Key-Value store. The syntax can vary from database to database.</p>
                    <p>SQL Database Examples - MySql <br /> NOSql Database Example - MongoDB, BigTable, Redis, RavenDB</p>
                </div>
            </div>
            {/* Blog Item */}
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-sm">
                <div className="collapse-title text-md md:text-xl font-medium">
                    What is JWT, and how does it work?
                </div>
                <div className="collapse-content">
                    <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.</p>
                </div>
            </div>
            {/* Blog Item */}
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-sm">
                <div className="collapse-title text-md md:text-xl font-medium">
                    What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content">
                    <p>Javascript is a programming language that mostly used for user interaction. On the other hand node js is a javascript runtime. Which is used for control server side.</p>
                </div>
            </div>
            {/* Blog Item */}
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-sm">
                <div className="collapse-title text-md md:text-xl font-medium">
                    How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content">
                    <p>Node js is a non blocking server side runtime. It handle request asyncronously. It holds requests and when the all requests are complete then it complete that hold request also</p>
                </div>
            </div>

        </div>
    );
};

export default Blog;