import React from 'react'
import { Button, Card, Image, Row } from 'react-bootstrap'
import disCo from '../Image/disco5.jpeg'
import imgLine from '../Image/line.png'
import imgFace from '../Image/facebook.png'
import imgInstagram from '../Image/instagram.png'
import imgTiktok from '../Image/tiktok.webp'
import imgTwitter from '../Image/twitter.webp'
import imgLogo from '../Image/logo.jpg'

function Index() {
  return (
    <>
      <div className="d-flex justify-content-center mt-3 ">
        <Card
          className=""
          style={{
            width: '800px',
            height: '800px',
            backgroundImage: `url(${disCo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: '0.9'
          }}
        >
          <div className="text-center mt-5">
            <Image
              src={imgLogo}
              fluid
              style={{ borderRadius: '50%', width: '120px' }}
            />
            <div className="mt-3">
              <h3 className="text-white tauri-regular"> Lobby Girls</h3>
            </div>
          </div>

          <div className="text-center mt-3">
            <div className="m-2 mb-4">
              <Image
                src={imgLine}
                style={{
                  width: 55,
                  position: 'absolute',
                  margin: '-8px'
                }}
              />
              <a
                href="https://line.me/R/ti/p/@155hcscd?oat_content=url"
                target="_blank"
              >
                <Button
                  style={{
                    width: '300px',
                    boxShadow: '5px 5px'
                  }}
                  variant="light"
                >
                  Line Official
                </Button>
              </a>
            </div>
            <div className="m-2 mb-4">
              <Image
                src={imgFace}
                style={{
                  width: '100px',
                  position: 'absolute',
                  margin: '-8px',
                  marginLeft: '-30px'
                }}
              />
              <a
                href="https://www.facebook.com/lobbygirls.official"
                target="_blank"
              >
                <Button
                  style={{
                    width: '300px',
                    boxShadow: '5px 5px'
                  }}
                  variant="light"
                >
                  Facebook
                </Button>
              </a>
            </div>
            <div className="m-2 mb-4">
              <Image
                src={imgInstagram}
                style={{
                  width: '55px',
                  position: 'absolute',
                  margin: '-8px',
                  marginLeft: '-6px'
                }}
              />
              <a
                href="https://www.instagram.com/lobbygirls.official/"
                target="_blank"
              >
                <Button
                  style={{
                    width: '300px',
                    boxShadow: '5px 5px'
                  }}
                  variant="light"
                >
                  Instagram
                </Button>
              </a>
            </div>
            <div className="m-2 mb-4">
              <Image
                src={imgTiktok}
                style={{
                  width: '85px',
                  position: 'absolute',
                  marginTop: '-23px',
                  marginLeft: '-23px'
                }}
              />
              <a
                href="https://www.tiktok.com/@lobbygirls?is_from_webapp=1&sender_device=pc"
                target="_blank"
              >
                <Button
                  style={{
                    width: '300px',
                    boxShadow: '5px 5px'
                  }}
                  variant="light"
                >
                  Tiktok
                </Button>
              </a>
            </div>
            <div className="m-2 mb-4">
              <Image
                src={imgTwitter}
                style={{
                  width: '55px',
                  position: 'absolute',
                  marginTop: '-10px',
                  marginLeft: '-8px'
                }}
              />
              <a href="https://twitter.com/LOBBYGIRLS2023" target="_blank">
                <Button
                  style={{
                    width: '300px',
                    boxShadow: '5px 5px'
                  }}
                  variant="light"
                >
                  Twitter
                </Button>
              </a>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}

export default Index
