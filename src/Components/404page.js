import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Sidebar from './Sidebar'
import Topbar from './Topbar'

function Page404() {
    return (
        <div id="wrapper">

            {/* <!-- Sidebar --> */}
            <Sidebar />
            {/* <!-- End of Sidebar --> */}

            {/* <!-- Content Wrapper --> */}
            <div id="content-wrapper" class="d-flex flex-column">

                {/* <!-- Main Content --> */}
                <div id="content">

                    {/* <!-- Topbar --> */}
                    <Topbar />
                    {/* <!-- End of Topbar --> */}

                    {/* <!-- Begin Page Content --> */}
                    <div class="container-fluid">

                        {/* <!-- 404 Error Text --> */}
                        <div class="text-center">
                            <div class="error mx-auto" data-text="404">404</div>
                            <p class="lead text-gray-800 mb-5">Page Not Found</p>
                            <p class="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
                            <Link to="/dashboard">&larr; Back to Dashboard</Link>
                        </div>

                    </div>
                    {/* <!-- /.container-fluid --> */}

                </div>
                {/* <!-- End of Main Content --> */}


                <Footer />
            </div>
            {/* <!-- End of Content Wrapper --> */}

        </div>
    )
}

export default Page404;