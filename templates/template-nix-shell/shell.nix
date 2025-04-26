{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    # Development tools
    git
    gnumake
    
    # Add your project-specific dependencies here
    # For example:
    # nodejs
    # python3
    # rustc
    # cargo
  ];

  shellHook = ''
    echo "Welcome to development environment!"
    # Add any shell initialization commands here
  '';
}